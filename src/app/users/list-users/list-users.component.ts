import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  selectedPartner: any;
  registartions: any;

  constructor(private ArticleService: UserService) { }

  ngOnInit(): void {
    this.ArticleService.getAllUsers().subscribe((response) => {
      this.registartions = response;
    }, (error) => {
      console.log(error);
    });
    }

  onDelete(id: number) {
    //with Services
    this.ArticleService.deleteUser(id).subscribe((response) => {
      this.ngOnInit(); // first way
    },
      (error) => {
        console.log(error);
      }
    );
     }

}
