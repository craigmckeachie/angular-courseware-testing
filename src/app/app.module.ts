import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsModule } from './projects/projects.module';
import { CharacterLengthPipe } from './shared/character-length.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, CharacterLengthPipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ProjectsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
