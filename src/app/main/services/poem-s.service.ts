import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Poem} from "../models/Poem";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PoemSService {
  readonly baseUrl :string = environment.baseURI;
  data: Poem[] = [];
  private dataSub = new BehaviorSubject<Array<Poem>>(this.data);
  constructor(private http: HttpClient) { }

  getRandom(count: number) : Promise<void | Array<Poem>> {
    return this.http.get<Array<Poem>>(this.baseUrl + `random/${count}/author,title`).toPromise()
      .then(res => this.getDataSubscription(<Array<Poem>>res));
  }

  filterByTitle(title : string) : Promise< undefined | Array<Poem>> {
    return this.http.get<Array<Poem>>(this.baseUrl + `title/${title}/author,title,lines`).toPromise();
  }

  getPoemSubscription() {
    return this.dataSub.asObservable();
  }

  getDataSubscription(newProduct: Array<Poem>){
    this.dataSub.next(newProduct);
  }
}
