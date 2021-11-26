import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'create-category-dialog',
    templateUrl: 'create-category-dialog.html',
  })
  export class CreateCategoryDialog {
    constructor(
      public dialogRef: MatDialogRef<CreateCategoryDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    createDialogForm: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  
  
    submit(event: any) {
      event.preventDefault();
  
      if (this.createDialogForm.valid) {
        console.log('xd')
      }
  
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }