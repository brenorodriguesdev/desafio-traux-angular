import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UpdateProductService } from "src/services/product/update-product";

@Component({
    selector: 'update-product-dialog',
    templateUrl: 'update-product-dialog.html',
  })
  export class UpdateProductDialog {
    constructor(
      public dialogRef: MatDialogRef<UpdateProductDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private readonly updateProductService: UpdateProductService,
      private _snackBar: MatSnackBar
    ) {}

    updateProductForm: FormGroup = new FormGroup({
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
  
      if (this.updateProductForm.valid) {
        const { name, image, idCategory } = this.updateProductForm.value

        this.updateProductService.update({
          name,
          image,
          idCategory,
          id: this.data
        }).subscribe(result => {
          this.openSnackBar("Produto atualizado!", "Fechar");
        }, error => this.errorMessage(error.status))
      }
  
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }