import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CreateProductService } from "src/services/product/create-product";

@Component({
  selector: 'create-product-dialog',
  templateUrl: 'create-product-dialog.html',
})
export class CreateProductDialog {
  constructor(
    public dialogRef: MatDialogRef<CreateProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly createProductService: CreateProductService,
    private _snackBar: MatSnackBar

  ) { }

  createProductForm: FormGroup = new FormGroup({
    idCategory: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  errorMessage(status: number) {
    if (!status || status == 404 || status == 500)
      this.openSnackBar("Tente novamente mais tarde...", "Fechar");
  }

  submit(event: any) {
    event.preventDefault();

    if (this.createProductForm.valid) {
      this.createProductService.create(this.createProductForm.value).subscribe(product => {
        this.openSnackBar("Produto cadastrado!", "Fechar");
      }, error => this.errorMessage(error.status))
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}