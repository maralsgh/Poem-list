import { Injectable } from '@angular/core';
import {Poem} from "../models/Poem";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoriteSService {
  data: Poem[] = [];
  favoriteDataSubject : BehaviorSubject<Array<Poem>>;
  constructor() {
    this.favoriteDataSubject  = new BehaviorSubject<Array<Poem>>([]);
  }

  updateLocalStorageSubject() {
    this.favoriteDataSubject.next(this.data);
  }

  getLocalStorageData() {
    return this.data;
  }


  getLocalStorageSubject(): Observable<Poem[]> {
    return this.favoriteDataSubject.asObservable();
  }


  isItemExistItem(data: Poem) {
    const index = this.data.findIndex(e => e.title === data.title);
    return index !== -1;
  }

  addToWishList(poem: Poem) {
    const index = this.data.findIndex(e => e.title === poem.title);
    if (index === -1) {
      this.data.push(poem);
    } else {
      this.data.splice(index, 1);
    }
    this.updateLocalStorageSubject();
  }

}
