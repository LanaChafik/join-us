import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { CoreService } from '../services/core.service';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public ID: Observable<string>;
  public isLoggedIn: Observable<boolean>;
  public events: Observable<any>;
  //public attendHidden: boolean = false;
  //public unattendHidden: boolean = true;
  constructor(private authService: AuthenticationService,
              private coreService: CoreService,
              private router: Router) { 
  }

  ngOnInit() {
    this._initState();
  }

  /**
   * @private
   * @description
   * Initializes the component.
   */
  private _initState(): void {
    this.isLoggedIn = this.authService.getLoginState();
    this.events = this.getEvents();
  }

  getEvents(): Observable<any> {
    return this.coreService.getEvents();
  }

  viewEvent(title: string) {
    console.log(title);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "title": title
      }
    };
    this.router.navigate(['view-event'], navigationExtras);
  }

  attend(title: string) {
    this.ID = this.coreService.getEventID(title);
    this.ID.subscribe(data => this.coreService.attend(data[0]["ID"]));
    this.router.navigate(['loggedin']);
    // console.log(document.getElementById("100").nodeValue);
    // if(document.getElementById("100").nodeValue == "Attend") {
    //   this.ID.subscribe(data => this.coreService.attend(data[0]["ID"]));
    //   document.getElementById("100").nodeValue = "Unattend";
    // }
    // else {
    //   this.ID.subscribe(data => this.coreService.unattend(data[0]["ID"]));
    //   document.getElementById("100").nodeValue = "Attend";
    // }
    
    //this.attendHidden = true;
    //this.unattendHidden = false;
  }

  unattend(title: string) {
    console.log(title);
    this.ID = this.coreService.getEventID(title);
    this.ID.subscribe(data => this.coreService.unattend(data[0]["ID"]));
    this.router.navigate(['events']);
    //this.attendHidden = false;
    //this.unattendHidden = true;
  }

}
