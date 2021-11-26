import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'create-product-dialog',
    templateUrl: 'create-product-dialog.html',
  })
  export class CreateProductDialog implements OnInit {
    constructor(
      public dialogRef: MatDialogRef<CreateProductDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    createProductForm: FormGroup = new FormGroup({
      idCategory: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  
  
    submit(event: any) {
      event.preventDefault();
  
      if (this.createProductForm.valid) {
        console.log('xd')
      }
  
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
      console.log('xasd')
    }
  }