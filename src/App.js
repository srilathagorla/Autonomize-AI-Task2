import {Component} from 'react'

import './App.css'

class ProductGrid extends Component {
  state = {productsList: [], selectedItem: null}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    this.setState({productsList: data})
  }

  productDetails = product => {
    this.setState({selectedItem: product})
  }

  render() {
    const {productsList, selectedItem} = this.state
    return (
      <div className="app">
        <h1 className="heading">Products</h1>
        <div className="product-grid">
          {productsList.map(product => (
            <button
              type="button"
              className="product"
              key={product.id}
              onClick={() => this.productDetails(product)}
            >
              <img src={product.image} alt={product.title} className="img" />
              <p className="para">{product.title}</p>
              <p className="para1">${product.price}</p>
            </button>
          ))}
        </div>
        {selectedItem && (
          <div className="product-details">
            <h2 className="h2">{selectedItem.title}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="img1"
            />
            <p className="p3">{selectedItem.description}</p>
            <p className="p4">${selectedItem.price}</p>
            <p className="p5">Category: {selectedItem.category}</p>
          </div>
        )}
      </div>
    )
  }
}

export default ProductGrid