import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpDialog } from 'src/components/sign-up-dialog';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignInPage {

  constructor(public dialog: MatDialog) { }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });



  submit(event: any) {
    event.preventDefault();

    if (this.loginForm.valid) {
      console.log('xd')
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
