import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { TopscorersComponent } from './topscorers/topscorers.component';
import {ApiService} from './api.service';
import { SettingsComponent } from './settings/settings.component'

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    LeaguesComponent,
    FixturesComponent,
    TopscorersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
