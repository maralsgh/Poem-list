import {Component, OnInit} from '@angular/core';
import {FavoriteSService} from "../../services/favorite-s.service";
import {Poem} from "../../models/Poem";
import {transitionAnimation} from "../../utility/animations";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  animations: [ transitionAnimation ]
})
export class FavoritesComponent implements OnInit {
  favoriteList: Poem[] = []

  constructor(private favoriteService: FavoriteSService) {
  }

  ngOnInit(): void {
    this.favoriteService.favoriteDataSubject.subscribe(data => {
      this.favoriteList = data;
    })
  }

}
