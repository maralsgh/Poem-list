import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PoemSService} from "../../services/poem-s.service";
import {Poem} from "../../models/Poem";
import {FavoriteSService} from "../../services/favorite-s.service";
import {transitionAnimation} from "../../utility/animations";

@Component({
  selector: 'app-poem-details',
  templateUrl: './poem-details.component.html',
  styleUrls: ['./poem-details.component.scss'],
  animations : [transitionAnimation]
})
export class PoemDetailsComponent implements OnInit {
  title: string = '';
  poemDetail: Poem = {};
  errorStatues: boolean = false;

  constructor(private route: ActivatedRoute,
              private service: PoemSService,
              private favoriteService: FavoriteSService) {
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
    });
  }

  ngOnInit(): void {

    this.service.filterByTitle(this.title).then(res => {
      if (res) {
        this.poemDetail = res[0];

      }
    }).catch(()=> this.errorStatues = true);
  }

  getState(data: Poem) {
    return this.favoriteService.isItemExistItem(data);
  }


  addToFavorite(data: Poem) {
      this.favoriteService.addToWishList(data);

  }
}
