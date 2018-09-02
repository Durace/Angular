import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostList } from './PostList/PostList.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.services';

@NgModule({
  declarations: [
    AppComponent,
    PostList
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
