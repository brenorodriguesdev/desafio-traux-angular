import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CreateCategoryService } from "src/services/category/create-category";

@Component({
    selector: 'create-category-dialog',
    templateUrl: 'create-category-dialog.html',
  })
  export class CreateCategoryDialog {
    constructor(
      public dialogRef: MatDialogRef<CreateCategoryDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private readonly createCategoryService: CreateCategoryService,
      private _snackBar: MatSnackBar,
    ) {}

    image: any;
    createCategoryForm: FormGroup = new FormGroup({
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
  
      if (!this.image) {
        return this.openSnackBar("Selecione uma image!", "Fechar");
      }

      if (this.createCategoryForm.valid) {
        this.createCategoryService.create({
          name: this.createCategoryForm.value.name,
          image: this.image
        }).subscribe(category => {
          this.openSnackBar("Categoria cadastrada!", "Fechar");
          this.dialogRef.close();
        }, error => this.errorMessage(error.status))
      }
  
    }

    onFileChange(event: any) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];  
      }
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }