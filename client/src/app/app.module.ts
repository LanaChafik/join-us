import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreService } from './services/core.service';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventsComponent } from './events/events.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './services/authentication.service';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ViewEventComponent } from './view-event/view-event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    EventsComponent,
    LoggedinComponent,
    SearchComponent,
    UsersComponent,
    EditProfileComponent,
    CreateEventComponent,
    ViewEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CoreService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
