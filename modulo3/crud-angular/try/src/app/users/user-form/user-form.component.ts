import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: User[] = [];
  userId: any = '';



  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: params => {
        this.userId = params.get("id");
        if (this.userId !== null) {
          this.userService.getUser(this.userId).subscribe({
            next: result => {
              this.userForm.patchValue({
                id: result.id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
              })
            }
          })
        }
      },
      error: error => console.log('Error', error),
    });

    this.showAllUsers();
  }

  showAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: result => this.users = result,
      error: error => console.log('Error', error),
    })
  }

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe({
      next: () => { console.log(`Usuário cadastrado com sucesso.`) },
      error: error => { console.log('Error', error) },
      complete: () => { this.router.navigate(['/']) }
    })
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: () => { console.log("Usuário atualizado com sucesso") },
      error: error => { console.log('Error', error) },
      complete: () => { this.router.navigate(['/']) }
    })
  }

  actionButton() {
    if (this.userId !== null) {
      this.updateUser()
    } else {
      this.createUser()
    }
  }

}
