import { Component, OnInit } from '@angular/core';
import {Poem} from "../../models/Poem";
import {PoemSService} from "../../services/poem-s.service";

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {
  poemsList: Array<Poem> = [];
  filterList: Array<Poem> = [];
  selectedItem: string | undefined;
  loading: boolean = false;
  constructor(private service: PoemSService) { }

  ngOnInit(): void {
    this.service.getPoemSubscription().subscribe(data => {
      this.poemsList = data;
      this.filterList = this.poemsList;
    })
  }

  listOfPoems() {
    this.loading = true;
    this.service.getRandom(20).catch(err => console.log(err)).finally(()=> {
      this.loading = false;
    })
  }

  fetchApi() {
    this.listOfPoems();

  }




  onChangeFilter($event: Event) {
    switch (this.selectedItem) {
      case  'Author':
        this.filterList = this.poemsList.sort((a : any, b:any) => (a.author > b.author) ? 1 : -1);
        break;
      case  'Title':
        this.filterList = this.poemsList.sort((a : any, b:any) => (a.title > b.title) ? 1 : -1);
        break;

    }

  }

}
