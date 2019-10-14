import React, {Component} from 'react';
import ProductItems from './ProductItems';
import AddProduct from './AddProduct'

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  state = {
    products: JSON.parse(localStorage.getItem('products'))
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({products});
  }

  getProducts = () => {
    return this.state.products
  }

  onEditSubmit = (name, price, ogName) => {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === ogName) {
        product.name = name;
        product.price = price;
      }
      return product
    })
    this.setState({
      products
    })
  }

  onAdd = (name, price) => {
    const products = this.getProducts();
    products.push({
      name,
      price
    })
    this.setState({
      products
    })
  }

  onDelete = (name) => {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => product.name !== name )
    
    this.setState({
      products: filteredProducts
    })
  }
  render() {
    return(
      <div className="App">
        <h1>Product Manager</h1>
        <AddProduct
          onAdd={this.onAdd}
        />
        {
          this.state.products.map( product => 
                <ProductItems 
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
                />
              )
        }
      </div>
    )
  }
}

export default App;
