import { CategoryModel } from "../category/category";

export interface ProductModel {
    id: number
    category: CategoryModel
    name: string
    image: string
}