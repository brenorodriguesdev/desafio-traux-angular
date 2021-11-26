import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'update-product-dialog',
    templateUrl: 'update-product-dialog.html',
  })
  export class UpdateProductDialog {
    constructor(
      public dialogRef: MatDialogRef<UpdateProductDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    updateProductForm: FormGroup = new FormGroup({
      idCategory: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  
  
  
    submit(event: any) {
      event.preventDefault();
  
      if (this.updateProductForm.valid) {
        console.log('xd')
      }
  
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }