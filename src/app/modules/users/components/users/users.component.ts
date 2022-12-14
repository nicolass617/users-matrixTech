import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/modules/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData = {} as User;

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id: any) {
    this.userService.getUserById(id)
          .subscribe({
            next: (resp: any) => {
              this.userData.firstName = resp.firstName;
              this.userData.lastName = resp.lastName;
              this.userData.email = resp.email;
              this.userData.phoneNumber = resp.phoneNumber;
              this.userData.city = resp.city;
              this.userData.country = resp.country;
            }
          });
  }

}

export interface User {
  firstName: any;
  lastName: any;
  email: any;
  phoneNumber: any;
  city: any;
  country: any;
}
