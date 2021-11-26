import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'update-category-dialog',
    templateUrl: 'update-category-dialog.html',
  })
  export class UpdateCategoryDialog {
    constructor(
      public dialogRef: MatDialogRef<UpdateCategoryDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    updateCategoryForm: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  
  
  
    submit(event: any) {
      event.preventDefault();
  
      if (this.updateCategoryForm.valid) {
        console.log('xd')
      }
  
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }