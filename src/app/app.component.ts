import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";
import { User } from "./models/user.model";
import { Router } from "@angular/router";
import { Role } from "./models/role.num";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-book-seller';

  currentUser: User = new User();

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe( data => {
      this.currentUser = data;
    })
  }

  isAdmin() {
    return this.currentUser?.role ===  Role.ADMIN;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
