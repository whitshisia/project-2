import React, { Component } from 'react';

class Filter extends Component {
    handleChange = (event) => {
        this.props.filterChange(event.target.value)
    }

    render() {
        return (
                <select onChange={event =>this.handleChange(event)}>
                    <option value="All" >All</option>
                    <option value="Pizza" >Pizza</option>
                    <option value="Sphagetti">Sphagetti</option>
                    <option value="Burger">Burger</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Fries">Fries</option>
                    <option value="Pork">Pork</option>
                    <option value="Lamb">Lamb</option>
                    <option value="Water">Water</option>
                    <option value="Juice">Juice</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Milkshake">Milkshake</option>
                    <option value="Soda">Soda</option>

                </select>
        );
    }
}

export default Filter;