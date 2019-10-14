import React, { Component } from 'react';

class AddProduct extends Component {
    
    onSubmit = (event) => {
        event.preventDefault();

        this.props.onAdd(this.NameInput.value, this.PriceInput.value);

        this.NameInput.value='';
        this.PriceInput.value='';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h3>Add Product</h3>
                    <input placeholder="name" ref={NameInput => this.NameInput = NameInput}/>
                    <input placeholder="price" ref={PriceInput => this.PriceInput = PriceInput} />
                    <button>Add</button>
                    <hr />
                </form>
            </div>
        )
    }
}

export default AddProduct