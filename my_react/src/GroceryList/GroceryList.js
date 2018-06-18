import React, { Component } from 'react';

class GroceryList extends Component {
    render() {
        return (
            <ul>
                <ListItem quantity="1">Breed</ListItem>
                <ListItem quantity="2">Book</ListItem>
                <ListItem quantity="3">Milk</ListItem>
            </ul>
        );
    }
}
class ListItem extends Component {

    render() {
        return (
            <li>
                {this.props.quantity}&nbsp;  {this.props.children}
            </li>
        );
    }
}
export default GroceryList;
