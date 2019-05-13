import { put, takeLatest, all } from 'redux-saga/effects';
import callApi from './../utils/apiCaller'

function* actFetchProductsRequest() {
  let data = null
  yield callApi('products', 'GET', null).then(res => {
    data = res.data
  })
  yield put({ type: "FETCH_PRODUCTS", products: data, });
}

function* actDeleteProductRequest(data) {
  let { id } = data
  yield callApi(`products/${id}`, 'DELETE', null).then(res => {
    
  })
  yield put({ type: "DELETE_PRODUCT", id, });
}

function* actAddProductRequest(data) {
  let { product } = data
  yield callApi(`products`, 'POST', product).then(res => {
    product = res.data
  })
  yield put({ type: "ADD_PRODUCT", product, });
}

function* actGetProductRequest(data) {
  let { id } = data
  yield callApi(`products/${id}`, 'GET', null).then(res => {
    data = res.data
  })
  yield put({ type: "EDIT_PRODUCT", product: data, });
}

function* actUpdateProductRequest(data) {
  let { product } = data
  // console.log(product)
  yield callApi(`products/${product.id}`, 'PUT', product).then(res => {
    data = res.data
  })
  yield put({ type: "UPDATE_PRODUCT", product: data, });
}

function* actionWatcher() {
  yield takeLatest('FETCH_PRODUCTS_API', actFetchProductsRequest)
  yield takeLatest('DELETE_PRODUCT_API', actDeleteProductRequest)
  yield takeLatest('ADD_PRODUCT_API', actAddProductRequest)
  yield takeLatest('EDIT_PRODUCT_API', actGetProductRequest)
  yield takeLatest('UPDATE_PRODUCT_API', actUpdateProductRequest)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
