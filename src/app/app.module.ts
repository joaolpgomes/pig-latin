import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppService } from './services/app.service';

import { SearchComponent } from './components/search/search.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchItemComponent,
    SearchHistoryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
