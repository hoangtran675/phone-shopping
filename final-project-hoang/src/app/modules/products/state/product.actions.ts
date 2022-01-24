
import {Action} from '@ngrx/store'

export enum ProductActionsType {
    LOAD_PRODUCT = '[Product] LOAD_PRODUCT',
    LOAD_PRODUCTS ='[Products] LOAD_PRODUCTS'
}
// load products thì chỉ cần cứ vậy mà load, không cần payload ( không cần dữ liệU đi kèm)
export class LoadProducts implements Action {
    // do thằng type không thay đổi nên để dạng readonly
    readonly type = ProductActionsType.LOAD_PRODUCTS;
}
// Load 1 product => cần ID của product đÓ => cần constructor
export class LoadProduct implements Action {
    // do thằng type không thay đổi nên để dạng readonly
    readonly type = ProductActionsType.LOAD_PRODUCT;
    constructor(private id : string){

    }
}
export type Actions = LoadProducts | LoadProduct;