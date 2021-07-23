import React from 'react'

export default function Orders(props) {
    return (
        <div>
            <h2>Name: {props.Orders.name}'s Pizza</h2>
            <p>Size: {props.Orders.pizzaSize} <br/>Sauce: {props.Orders.sauce} 
            <br/>Toppings: {props.Orders.toppings} <br/>Special: {props.Orders.special}</p>
        </div>
    )
}
