import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "src/environments/environment";
import { UpdateCategoryService } from "src/services/category/update-category";

@Component({
  selector: 'update-category-dialog',
  templateUrl: 'update-category-dialog.html',
})
export class UpdateCategoryDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UpdateCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly updateCategoryService: UpdateCategoryService,
    private _snackBar: MatSnackBar
  ) { }

  updateCategoryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    updateImage: new FormControl(false)
  });

  updateImage: boolean = false;
  image: any;


  async ngOnInit() {
    this.updateCategoryForm = new FormGroup({
      name: new FormControl(this.data.name, Validators.required),
      updateImage: new FormControl(false)
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  errorMessage(status: number) {
    if (!status || status == 404 || status == 500)
      this.openSnackBar("Tente novamente mais tarde...", "Fechar");
  }

  submit(event: any) {
    event.preventDefault();

    if (!this.image && this.updateImage) {
      return this.openSnackBar("Selecione uma image!", "Fechar");
    }

    if (this.updateCategoryForm.valid) {
      const { name } = this.updateCategoryForm.value
      this.updateCategoryService.update({ id: this.data.id, name, image: this.updateImage ? this.image : null }).subscribe(result => {
        this.openSnackBar("Categoria atualizada!", "Fechar");
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