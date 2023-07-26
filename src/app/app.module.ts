import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/main/home/home.component';
import { FeaturedSongsComponent } from './views/main/featured-songs/featured-songs.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { ArtistsComponent } from './views/main/artists/artists.component';
import { ServicesComponent } from './views/main/services/services.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StudiosComponent } from './views/main/studios/studios.component';
import { FooterComponent } from './components/footer/footer.component';
import { BtnGoTopComponent } from './components/btn-go-top/btn-go-top.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    FeaturedSongsComponent,
    SongCardComponent,
    ArtistsComponent,
    ServicesComponent,
    StudiosComponent,
    FooterComponent,
    BtnGoTopComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
