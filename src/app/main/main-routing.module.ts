import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";
import {PoemDetailsComponent} from "./components/poem-details/poem-details.component";
import {PoemsComponent} from "./components/poems/poems.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: PoemsComponent },
      { path: 'poem/:title', component: PoemDetailsComponent },
      { path: 'favorite', component: FavoritesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
