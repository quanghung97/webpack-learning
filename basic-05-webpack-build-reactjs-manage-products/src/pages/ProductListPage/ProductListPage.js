import React, {Component, Fragment} from 'react'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index'

class ProductListPage extends Component {

  componentDidMount() {
    this.props.fetchAllProducts()
  }

  showProducts(products) {
    let result = null
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem key={index}
                       product={product}
                       index={index}
                       onDelete={this.onDelete}
          />
        )
      })
    }
    return result
  }

  onDelete = (id) => {
    this.props.onDeleteProduct(id)
  }

  render() {
    // let  { products }  = this.state // products API
    let  { products }  = this.props // products state from redux
    // let products = []
    return (
        <Fragment>
          <Link to="/product/add" className="btn btn-info mb-2">
              Thêm sản phẩm
          </Link>
          <ProductList>
            {this.showProducts(products)}
          </ProductList>
        </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest())
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
