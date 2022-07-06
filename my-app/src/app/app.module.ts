import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicContainerComponent } from './music-container/music-container.component';
import { SongListComponent } from './music-container/song-list/song-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicContainerComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
