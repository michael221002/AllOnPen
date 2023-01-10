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

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

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
  providers: [
    //{ provide: APP_BASE_HREF, useValue: '/' },
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
