import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SignUpService } from "src/services/login/sign-up";

@Component({
  selector: 'sign-up-dialog',
  templateUrl: 'sign-up-dialog.html',
})
export class SignUpDialog {
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly signUpService: SignUpService, private _snackBar: MatSnackBar
  ) { }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  errorMessage(status: number) {
    if (status == 400)
    this.openSnackBar("Esse usuário já está cadastrado!", "Fechar");
    if (!status || status == 404 || status == 500)
      this.openSnackBar("Tente novamente mais tarde...", "Fechar");
  }

  submit(event: any) {
    event.preventDefault();

    if (this.registerForm.valid) {
      const { name, username, password } = this.registerForm.value

      this.signUpService.sign({
        name,
        username,
        password
      }).subscribe(result => this.openSnackBar("Conta cadastrada com sucesso!", "Fechar"), error => this.errorMessage(error.status))
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}