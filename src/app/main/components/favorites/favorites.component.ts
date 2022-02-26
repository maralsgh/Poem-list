import { Component, OnInit } from '@angular/core';
import {FavoriteSService} from "../../services/favorite-s.service";
import {Poem} from "../../models/Poem";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
   favoriteList : Poem[] = []
  constructor(private favoriteService: FavoriteSService) { }

  ngOnInit(): void {
    this.favoriteService.favoriteDataSubject.subscribe(data => {
      this.favoriteList = data;
    })
  }

}
