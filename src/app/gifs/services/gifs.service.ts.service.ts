import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GjfsService {

  private _tagsHistory: string[] = [];
  private apikey:     string ='Xjjy7eNtHNr4bzyB0RpmupnARySXjKzs';
  private serviceUrl: string ='http://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { }

  get tagsHistory() {
    return this._tagsHistory;
  }
  //para evitar duplicados
  private organizeHistory(tag: string) {
   tag = tag.toLocaleLowerCase();
   if(this._tagsHistory.includes( tag )) {
    this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag );
   }
   this._tagsHistory.unshift( tag );
   this._tagsHistory = this.tagsHistory.splice(0,10);
  }

 async searchTag( tag: string ): Promise<void> {
  //limpia espacios anteriores
  tag = tag.trim();
  //si el tag  es cero no hagas nada
  if (tag.length === 0) return;
  this.organizeHistory(tag);
  console.log(this._tagsHistory);

  const params = new HttpParams()
   .set('api_key', this.apikey)
   .set('limit', '10')
   .set('q', tag)

  this.http.get(`${ this.serviceUrl }/search`, { params })
   .subscribe( resp =>{
    console.log(resp);
   })

  }

}
