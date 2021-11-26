import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'sign-up-dialog',
    templateUrl: 'sign-up-dialog.html',
  })
  export class SignUpDialog {
    constructor(
      public dialogRef: MatDialogRef<SignUpDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    registerForm: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  
  
  
    submit(event: any) {
      event.preventDefault();
  
      if (this.registerForm.valid) {
        console.log('xd')
      }
  
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }