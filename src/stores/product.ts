import { Injectable } from '@angular/core';
import { ProductModel } from 'src/models/product/product';

@Injectable({
    providedIn: 'root',
})
export class ProductStore {

    private products: ProductModel[] = []

    set(products: ProductModel[]) {
        this.products = products
    }

    get() {
        return this.products
    }

    add(product: ProductModel) {
        this.products.push(product)
    }

    remove(id: number) {
        this.products = this.products.filter(product => product.id != id)
    }

}