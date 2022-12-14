import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/modules/shared/services/users.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService) { 
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register(pageName: string): void {
    let data = {
      firstName: this.userForm.get('firstName')?.value,
      lastName: this.userForm.get('lastName')?.value,
      email: this.userForm.get('email')?.value,
      phoneNumber: this.userForm.get('phoneNumber')?.value,
      city: this.userForm.get('city')?.value,
      country: this.userForm.get('country')?.value
    }

    this.userService.saveUser(data)
          .subscribe({
            next: (resp: any) => {
              console.log(resp.id);
              this.router.navigate([`${pageName}`, {id: resp.id}]);
            },
            error: (e) => {
              console.log(e);
            }
          });
  }

}
