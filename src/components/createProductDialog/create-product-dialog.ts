import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CategoryModel } from "src/models/category/category";
import { GetAllCategoryService } from "src/services/category/get-all-category";
import { CreateProductService } from "src/services/product/create-product";

@Component({
  selector: 'create-product-dialog',
  templateUrl: 'create-product-dialog.html',
})
export class CreateProductDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly createProductService: CreateProductService,
    private readonly getAllCategoryService: GetAllCategoryService,
    private _snackBar: MatSnackBar

  ) { }

  categories: CategoryModel[] = []
  image: any;

  createProductForm: FormGroup = new FormGroup({
    idCategory: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.getAllCategoryService.get().subscribe(categories => this.categories = categories)
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

    if (!this.image) {
      return this.openSnackBar("Selecione uma image!", "Fechar");
    }

    if (this.createProductForm.valid) {
      const { idCategory, name } = this.createProductForm.value
      this.createProductService.create({
        idCategory,
        name,
        image: this.image
      }).subscribe(product => {
        this.openSnackBar("Produto cadastrado!", "Fechar");
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