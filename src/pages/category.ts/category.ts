import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateCategoryDialog } from 'src/components/createCategoryDialog/create-category-dialog';
import { UpdateCategoryDialog } from 'src/components/updateCategoryDialog/update-category-dialog';
import { environment } from 'src/environments/environment';
import { CategoryModel } from 'src/models/category/category';
import { DeleteByIdCategoryService } from 'src/services/category/delete-by-id-category';
import { GetAllCategoryService } from 'src/services/category/get-all-category';

@Component({
    selector: 'category',
    templateUrl: './category.html',
    styleUrls: ['./category.scss']
})
export class CategoryPage implements AfterViewInit, OnInit {
    constructor(
        public dialog: MatDialog,
        private readonly getAllCategoryService: GetAllCategoryService,
        private readonly deleteByIdCategoryService: DeleteByIdCategoryService) { }
    dataSource = new MatTableDataSource<CategoryModel>();

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    displayedColumns: string[] = ['add', 'id', 'name', 'image', 'edit', 'delete'];

    ngOnInit() {
        this.getAllCategoryService.get().subscribe(categories => this.dataSource.data = categories)
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    openCreateCategoryDialog(): void {
        const dialogRef = this.dialog.open(CreateCategoryDialog, {
            width: '30rem',
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getAllCategoryService.get().subscribe(categories => this.dataSource.data = categories)
        });
    }

    openUpdateCategoryDialog(category: CategoryModel): void {
        const dialogRef = this.dialog.open(UpdateCategoryDialog, {
            width: '30rem',
            data: category,
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getAllCategoryService.get().subscribe(categories => this.dataSource.data = categories)
        });
    }

    openImage(image: string) {
        window.open(
            environment.urlImage + image,
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    deleteById(id: number) {
        this.deleteByIdCategoryService.delete(id).subscribe(result => this.getAllCategoryService.get().subscribe(categories => this.dataSource.data = categories))
    }
}


