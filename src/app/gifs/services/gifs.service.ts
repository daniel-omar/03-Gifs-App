import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';



@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private GIPHY_API_KEY: string = "go4BN1krRbb9a3NY7kQYc58eXR1fsxvM"
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";

  constructor(private _http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag != tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem("history", JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {

    if (!localStorage.getItem("history")) return;

    const temporal = JSON.parse(localStorage.getItem("history")!);
    this._tagsHistory = temporal!;

    if (this.tagsHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]);

  }

  searchTag(newTag: string) {

    if (newTag.length == 0) return;
    this.organizeHistory(newTag);

    const params = new HttpParams()
      .set("api_key", "go4BN1krRbb9a3NY7kQYc58eXR1fsxvM")
      .set("limit", "10")
      .set("q", newTag)

    this._http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
        console.log(this.gifsList)
      })

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=go4BN1krRbb9a3NY7kQYc58eXR1fsxvM&q=valorant&limit=5')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))

  }

}
