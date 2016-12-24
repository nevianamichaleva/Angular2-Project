import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule }   from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DetailComponent } from './detail/detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsListComponent,
    LoginComponent,
    HomeComponent,
    BookDetailComponent,
    DetailComponent,
    UserDetailComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
