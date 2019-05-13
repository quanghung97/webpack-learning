import * as Types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'

export const actFetchProductsRequest = () => {
    return {
        type: Types.FETCH_PRODUCTS_API
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return {
        type: Types.DELETE_PRODUCT_API,
        id
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return {
        type: Types.ADD_PRODUCT_API,
        product
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return {
        type: Types.EDIT_PRODUCT_API,
        id
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return {
        type: Types.UPDATE_PRODUCT_API,
        product
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
