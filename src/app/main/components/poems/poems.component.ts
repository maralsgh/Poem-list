import {Component, OnInit} from '@angular/core';
import {Poem} from "../../models/Poem";
import {PoemSService} from "../../services/poem-s.service";
import {transitionAnimation} from "../../utility/animations";

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss'],
  animations: [transitionAnimation]
})
export class PoemsComponent implements OnInit {
  poemsList: Array<Poem> = [];
  filterList: Array<Poem> = [];
  selectedItem: string | undefined;
  loading: boolean = false;
  errorStatues: boolean = false;

  constructor(private service: PoemSService) {
  }

  ngOnInit(): void {
    this.service.getPoemSubscription().subscribe(data => {
      this.poemsList = data;
      this.filterList = this.poemsList;
    })
  }


  fetchApi() {
    this.errorStatues = false;
    this.listOfPoems();
  }

  listOfPoems() {
    this.loading = true;
    this.service.getRandom(20).catch(() => this.errorStatues = true).finally(() => {
      this.loading = false;
    })
  }


  onChangeFilter() {
    switch ( this.selectedItem ) {
      case  'Author':
        this.filterList = this.poemsList.sort((a: any, b: any) => (a.author > b.author) ? 1 : -1);
        break;
      case  'Title':
        this.filterList = this.poemsList.sort((a: any, b: any) => (a.title > b.title) ? 1 : -1);
        break;
    }
  }

}
