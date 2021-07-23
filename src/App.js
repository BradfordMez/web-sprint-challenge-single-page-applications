import React, {useState} from "react";
import {Link, Route, Switch} from 'react-router-dom'
import PizzaForm from "./PizzaForm";
import HomePage from "./HomePage";
import Orders from "./Orders";


const App = () => {
  const [orders, setOrders] = useState([])
  const addToOrder=(newOrder)=>{
    setOrders([...orders, newOrder])
  }

  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <button>Help</button>
      </header>

      <Switch>

        <Route exact path='/'>
          <HomePage/>
        </Route>

        <Route path='/pizza'>
          <PizzaForm addToOrder={addToOrder}/>
            {orders.map((order)=>{
              return <Orders Orders={order}/>
            })}
        </Route>

      </Switch>


    </>
    
    
  );
};
export default App;
