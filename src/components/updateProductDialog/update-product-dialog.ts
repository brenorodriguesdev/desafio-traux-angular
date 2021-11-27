import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CategoryModel } from "src/models/category/category";
import { GetAllCategoryService } from "src/services/category/get-all-category";
import { UpdateProductService } from "src/services/product/update-product";

@Component({
    selector: 'update-product-dialog',
    templateUrl: 'update-product-dialog.html',
  })
  export class UpdateProductDialog implements OnInit {
    constructor(
      public dialogRef: MatDialogRef<UpdateProductDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private readonly updateProductService: UpdateProductService,
      private readonly getAllCategoryService: GetAllCategoryService,
      private _snackBar: MatSnackBar
    ) {}

    categories: CategoryModel[] = []

    updateProductForm: FormGroup = new FormGroup({
      idCategory: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  
    ngOnInit() {
      this.getAllCategoryService.get().subscribe(categories => this.categories = categories)
      this.updateProductForm = new FormGroup({
        idCategory: new FormControl(this.data.category.id.toString(), Validators.required),
        name: new FormControl(this.data.name, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
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
  
      if (this.updateProductForm.valid) {
        const { name, image, idCategory } = this.updateProductForm.value

        console.log(this.updateProductForm.value)
        this.updateProductService.update({
          name,
          image,
          idCategory,
          id: this.data.id
        }).subscribe(result => {
          this.openSnackBar("Produto atualizado!", "Fechar");
          this.dialogRef.close();
        }, error => this.errorMessage(error.status))
      }
  
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }