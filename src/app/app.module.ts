import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxComponent } from './parallax/parallax.component';

import { ParallaxDirective } from './parallax/parallax.directive';
import { ContentComponent } from './content/content.component';
import { CoverComponent } from './cover/cover.component';
import { SentenceDirective } from './sentence.directive';

import { PictureDirective } from './picture.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    ParallaxDirective,
    ContentComponent,
    CoverComponent,
    SentenceDirective,
    PictureDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
