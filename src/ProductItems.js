import React, { Component } from 'react';

class ProductItems extends Component {

    state = {
        isEdit: false
    }

    onEdit = () => {
        console.log('edit')
        this.setState({
            isEdit: true
        })
    }

    onEditSubmit = (event) => {
        event.preventDefault();
        this.props.onEditSubmit(this.NameInput.value, this.PriceInput.value, this.props.name);

        this.setState({
            isEdit: false
        })
    }

    render() {
        const { name, price, onDelete } = this.props;

        return (
            <div>
                {
                    this.state.isEdit ? (
                        <form onSubmit={this.onEditSubmit}>
                            <input placeholder="name" ref={NameInput => this.NameInput = NameInput} defaultValue={name} />
                            <input placeholder="price" ref={PriceInput => this.PriceInput = PriceInput} defaultValue={price}/>
                            <button>Save</button>
                        </form>
                    )
                        : (
                            <div>
                                <span>{name}</span>
                                {` | `}
                                <span>{price}</span>
                                {` | `}
                                <button onClick={this.onEdit}>Edit</button>
                                {` | `}
                                <button onClick={() => { onDelete(name) }}>Delete</button>
                            </div>
                        )
                }
            </div>
        )

    }
}


export default ProductItems;