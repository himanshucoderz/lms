import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { MobheaderComponent } from './shared/mobheader/mobheader.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { MapComponent } from './map/map.component';
import { CompanyDocComponent } from './company-doc/company-doc.component';
import { OjtComponent } from './ojt/ojt.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    MobheaderComponent,
    LandingComponent,
    LibraryComponent,
    TranscriptComponent,
    MapComponent,
    CompanyDocComponent,
    OjtComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
