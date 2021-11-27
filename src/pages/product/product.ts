import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateProductDialog } from 'src/components/createProductDialog/create-product-dialog';
import { UpdateProductDialog } from 'src/components/updateProductDialog/update-product-dialog';
import { environment } from 'src/environments/environment';
import { ProductModel } from 'src/models/product/product';
import { DeleteByIdProductService } from 'src/services/product/delete-by-id-product';
import { GetAllProductService } from 'src/services/product/get-all-product';

@Component({
    selector: 'product',
    templateUrl: './product.html',
    styleUrls: ['./product.scss']
})
export class ProductPage implements AfterViewInit, OnInit {
    constructor(public dialog: MatDialog, 
        private readonly getAllProductService: GetAllProductService,
        private readonly deleteByIdProductService: DeleteByIdProductService) { }
    dataSource = new MatTableDataSource<ProductModel>();

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    displayedColumns: string[] = ['add', 'id', 'category', 'name', 'image', 'edit', 'delete'];

    ngOnInit() {
        this.getAllProductService.get().subscribe(products => this.dataSource.data = products)
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    openCreateProductDialog(): void {
        const dialogRef = this.dialog.open(CreateProductDialog, {
            width: '30rem',
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getAllProductService.get().subscribe(products => this.dataSource.data = products)
        });
    }

    openUpdateProductDialog(product: ProductModel): void {
        const dialogRef = this.dialog.open(UpdateProductDialog, {
            width: '30rem',
            data: product,
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getAllProductService.get().subscribe(products => this.dataSource.data = products)
        });
    }

    openImage(image: string) {
        window.open(
            environment.urlImage + image,
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    deleteById(id: number) {
        this.deleteByIdProductService.delete(id).subscribe(result =>  this.getAllProductService.get().subscribe(products => this.dataSource.data = products))
    }
}


