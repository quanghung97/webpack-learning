import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index'
import {connect} from 'react-redux'

class ProductActionPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    }
  }

  componentDidMount() {
    let {match} = this.props
    if(match) {
      let id = match.params.id
      this.props.onEditProduct(id)
    }
  }

  componentWillReceiveProps(nextProps){ //same watch in vue
    if(nextProps && nextProps.itemEditing) {
      let {itemEditing} = nextProps
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status
      })
    }
  }

  onChange = (e) => {
    let target = e.target
    let name = target.name
    let value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault()

    let {history} = this.props

    let {id, txtName, txtPrice, chkbStatus} = this.state

    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }
    if(id) { //update
      this.props.onUpdateProduct(product)
    } else {
      this.props.onAddProduct(product)
    }    
    history.goBack()
  }

  render() {
    let {txtName, txtPrice, chkbStatus} = this.state

    return (
      <div>
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" 
                   className="form-control" 
                   placeholder="tên sản phẩm" 
                   name="txtName" 
                   value={txtName}
                   onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input type="number" 
                   className="form-control" 
                   placeholder="giá sản phẩm" 
                   name="txtPrice"
                   value={txtPrice}
                   onChange={this.onChange}/>
          </div>
          <div className="form-check">
            <input type="checkbox" 
                   className="form-check-input" 
                   name="chkbStatus" 
                   value={chkbStatus}
                   onChange={this.onChange}
                   checked={chkbStatus}/>
            <label className="form-check-label">Còn Hàng</label>
          </div>
          <Link to="/product-list" className="btn btn-danger mr-2">
            Trở Lại
          </Link>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product))
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id))
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)
