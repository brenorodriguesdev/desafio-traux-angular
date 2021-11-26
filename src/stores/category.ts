import { Injectable } from '@angular/core';
import { CategoryModel } from 'src/models/category/category';

@Injectable({
    providedIn: 'root',
})
export class CategoryStore {

    private categories: CategoryModel[] = []

    set(categories: CategoryModel[]) {
        this.categories = categories
    }

    get() {
        return this.categories
    }

    add(category: CategoryModel) {
        this.categories.push(category)
    }

    remove(id: number) {
        this.categories = this.categories.filter(category => category.id != id)
    }

}