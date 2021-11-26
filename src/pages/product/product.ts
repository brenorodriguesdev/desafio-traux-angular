import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateProductDialog } from 'src/components/createProductDialog/create-product-dialog';
import { UpdateProductDialog } from 'src/components/updateProductDialog/update-product-dialog';


const ELEMENT_DATA: any[] = [
    { id: 1, category: 'category 1', name: 'product 1', image: '1.png' }
];

@Component({
    selector: 'product',
    templateUrl: './product.html',
    styleUrls: ['./product.scss']
})
export class ProductPage implements AfterViewInit {
    constructor(public dialog: MatDialog) { }
    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    displayedColumns: string[] = ['add', 'id', 'category', 'name', 'image', 'edit', 'delete'];

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }

    openCreateProductDialog(): void {
        const dialogRef = this.dialog.open(CreateProductDialog, {
            width: '30rem',
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }

    openUpdateProductDialog(id: number): void {
        const dialogRef = this.dialog.open(UpdateProductDialog, {
            width: '30rem',
            data: id,
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }
}


