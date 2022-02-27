import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PoemDetailsComponent } from './components/poem-details/poem-details.component';
import { PoemCardComponent } from './components/poem-card/poem-card.component';
import {PoemSService} from "./services/poem-s.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbAlertModule, NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { PoemsComponent } from './components/poems/poems.component';
import {FavoriteSService} from "./services/favorite-s.service";


@NgModule({
  declarations: [
    LayoutComponent,
    FavoritesComponent,
    PoemDetailsComponent,
    PoemCardComponent,
    PoemsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbNavModule,
    NgbAlertModule,
    NgbTooltipModule
  ],
  providers: [PoemSService , FavoriteSService]
})
export class MainModule { }
