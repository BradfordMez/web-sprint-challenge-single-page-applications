import React from 'react'
import styled from 'styled-components'

const FormAF = styled.form`
    text-align: center;
    border:.8em ridge ${props=>props.theme.tertiaryColor};
    margin-left:5rem;
    margin-right:5rem;
`
const Footer= styled.footer`
margin-top:1rem;
padding-left: 3em;
padding-right: 3em;

`


export default function PizzaForm() {
    return (
        <FormAF>
            <h2>Build Your Own Pizza!</h2>
            <img></img>
            <h1>Build Your Own Pizza</h1>

            <div id='sizeChoice'>
                <h2>Choice of Size</h2>

                <select name="pizzaSize">
                    <option value=''>--Select a Size--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extraLarge">Extra Large</option>
                </select>
            </div>

            <div id='sauceChoice'>
                <h2>Choice of Sauce</h2>

                <input type='radio' id='marinara' name='sauce' value='Marinara'/>
                    <label for='marinara'>Marinara</label>
                <input type='radio' id='garRanch' name='sauce' value='Garlic Ranch'/>
                    <label for='garRanch'>Garlic Ranch</label>
                <input type='radio' id='bbq' name='sauce' value='BBQ'/>
                    <label for='bbq'>BBQ Sauce</label>
                <input type='radio' id='spinachAlf' name='sauce' value='Spinach Alfredo'/>
                    <label for='spinachAlf'>Spinach Alfredo</label>
            </div>

            <div id='toppings'>
                <h2>Add Toppings</h2>

                <input type='checkbox' id='pepperoni' value='Pepperoni' />
                    <label for='pepperoni'>Pepperoni</label>

                <input type='checkbox' id='sausage' value='Sausage' />
                    <label for='sausage'>Sausage</label>

                <input type='checkbox' id='chicken' value='Chicken' />
                    <label for='chicken'>Chicken</label>

                <input type='checkbox' id='canadian' value='Canadian Bacon' />
                    <label for='canadian'>Canadian Bacon</label>

                <input type='checkbox' id='onions' value='Onions' />
                    <label for='onions'>Onions</label>

                <input type='checkbox' id='tomatoes' value='Tomatoes' />
                    <label for='tomatoes'>Tomatoes</label>

                <input type='checkbox' id='pineapple' value='Pineapple' />
                    <label for='pineapple'>Pineapple</label>

                <input type='checkbox' id='greenPep' value='Green Peppers' />
                    <label for='greenPep'>Green Peppers</label>

                <input type='checkbox' id='blackOlives' value='Black Olives' />
                    <label for='blackOlives'>Black Olives</label>

                <input type='checkbox' id='extraCheese' value='Extra Cheese' />
                    <label for='extraCheese'>Extra Cheese</label>

            </div>
            <div id='special'>
                <h2>Special Instructions</h2>
                <input type='text' id='instruction' placeholder="Anything else ?"/>
            </div>

            <Footer>
                <input type="number" id="quantity" placeholder="1"/>
                <button>Add to Order</button>
            </Footer>
            

        </FormAF>
    )
}
