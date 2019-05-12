import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProductList extends Component {

  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Do you want delete product')) { 
      this.props.onDelete(id)
    }
  }

  render() {
    let {product, index} = this.props
    let statusName = product.status ? 'Còn Hàng' : 'Hết Hàng'
    let statusClass = product.status ? 'warning' : 'default'
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><span className={`badge badge-${statusClass}`}>{statusName}</span></td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-2">Sửa</Link>
          <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Xóa</button>
        </td>
      </tr>
    )
  }
}

export default ProductList
