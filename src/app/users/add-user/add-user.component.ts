import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private articleService: UserService) { }

  ngOnInit(): void {
  }
  addUser() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    // with service
    this.articleService.addUser(this.profileForm.value).subscribe((response) => {
      this.router.navigate(['/users/listUsers']);
    },
      (error) => {
        console.log(error);
      }
    )
  }
}
