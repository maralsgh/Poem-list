import {Component, Input, OnInit} from '@angular/core';
import {Poem} from "../../models/Poem";

@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.scss']
})
export class PoemCardComponent implements OnInit {
  @Input() data : Poem[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
