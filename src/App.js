import React from "react";
import {Link, Route, Switch} from 'react-router-dom'
import PizzaForm from "./PizzaForm";
import HomePage from "./HomePage";


const App = () => {

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
          <PizzaForm/>
        </Route>

      </Switch>


    </>
    
    
  );
};
export default App;
