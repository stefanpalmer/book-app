import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { NovelsComponent } from './novels/novels.component';
import { AnthologiesComponent } from './anthologies/anthologies.component';
import { LibraryComponent } from './library/library.component';

import { BookService } from './shared/book.service';

import { SubstringPipe } from './substring.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    NovelsComponent,
    AnthologiesComponent,
    LibraryComponent,
    SubstringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
