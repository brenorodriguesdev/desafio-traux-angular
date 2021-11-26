import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpDialog } from 'src/components/signUpDialog/sign-up-dialog';
import { SignInService } from 'src/services/login/sign-in';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignInPage {

  constructor(public dialog: MatDialog, 
    private readonly signInService: SignInService, 
    private _snackBar: MatSnackBar, 
    private router: Router) { }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  errorMessage(status: number) {
    if (status == 401)
      this.openSnackBar("Usuário ou senha inválidos", "Fechar");
    if (!status || status == 404 || status == 500)
      this.openSnackBar("Tente novamente mais tarde...", "Fechar");
  }
  submit(event: any) {
    event.preventDefault();

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value
      this.signInService.sign({
        username,
        password
      }).subscribe(token => {
        console.log(token)
        localStorage.setItem("token", token)
        this.router.navigateByUrl("/product");
      }, error => this.errorMessage(error.status))
    }

  }

  openSignUpDialog(): void {
    const dialogRef = this.dialog.open(SignUpDialog, {
      width: '30rem',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
