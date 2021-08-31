import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { PictureImagePipe } from './pipes/picture-image.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    HeroeCardComponent,
    PictureImagePipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
