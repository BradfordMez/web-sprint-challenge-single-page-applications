import React from 'react'

export default function Orders(props) {
    return (
        <div>
            <h2>Name:{props.Orders.name}</h2>
            <p>Pizza= Size:{props.Orders.size}, Sauce:{props.Orders.sauce}, Toppings:{props.Orders.toppings}, Special:{props.Orders.special}</p>
        </div>
    )
}
