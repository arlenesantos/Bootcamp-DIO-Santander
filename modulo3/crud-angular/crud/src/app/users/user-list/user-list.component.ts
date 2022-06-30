import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.showAllUsers();
  }

  showAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: result => {
        this.users = result;
      },
      error: error => console.log('Error', error)
    })
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => { console.log(`Usuário excluído com sucesso.`); },
      error: error => { console.log('Error', error); },
      complete: () => { this.showAllUsers(); }
    })
  }

}


