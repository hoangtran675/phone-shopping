import * as productActions from './product.actions'

const initialState = {
    loading : false,
    loaded : false,
    date : {},
    type : ''
}

const products = [
    {
        id : 1, name : 'product 1', price : 2000
    },
    {
        id : 2, name : 'product 2', price : 2000
    }
];
export function productReducer(state = initialState , action : any){
    // reducer nhận vào action , state cũ, trả ra state
    switch(action.type){
        case productActions.ProductActionsType.LOAD_PRODUCTS : {
            return {
                // dấu ... là clone lại state cũ,
                // có thể ... trong trường hợp này là những gì của state cũ không bị thay đổi thì sẽ được giữ nguyên như cũ,
                // chỉ update thêm những thay đổi
                // nếu không có ...state mà chỉ sẽ thành là update những cái mới trong state, những cái cũ không có gì update => bị null
                ...state,
                data : {
                    products : products
                }
            }
        }
        case productActions.ProductActionsType.LOAD_PRODUCT : {
            const newProduct = products.filter( (item) => {
                return item.id == action.payload;
            })
            return {
                ...state,
                data : {
                    product : newProduct
                }
            }
        }
        default : {
            return state;
        }
    }
}