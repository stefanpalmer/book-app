import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { NovelsComponent } from './novels/novels.component';
import { AnthologiesComponent } from './anthologies/anthologies.component';
import { LibraryComponent } from './library/library.component';
import { BookService } from './shared/book.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    NovelsComponent,
    AnthologiesComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
