import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateCategoryDialog } from 'src/components/createCategoryDialog/create-category-dialog';
import { UpdateCategoryDialog } from 'src/components/updateCategoryDialog/update-category-dialog';


const ELEMENT_DATA: any[] = [
    { id: 1, name: 'category 1', image: '1.png' }
];

@Component({
    selector: 'category',
    templateUrl: './category.html',
    styleUrls: ['./category.scss']
})
export class CategoryPage implements AfterViewInit {
    constructor(public dialog: MatDialog) { }
    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    displayedColumns: string[] = ['add', 'id', 'name', 'image', 'edit', 'delete'];

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }

    openCreateCategoryDialog(): void {
        const dialogRef = this.dialog.open(CreateCategoryDialog, {
            width: '30rem',
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }

    openUpdateCategoryDialog(id: number): void {
        const dialogRef = this.dialog.open(UpdateCategoryDialog, {
            width: '30rem',
            data: id,
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }
}


