import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import * as yup from 'yup'

const Form = styled.form`
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

export default function PizzaForm({addToOrder}) {
    const [formData, setFormData] = useState({
        name: "",
        pizzaSize: "",
        sauce: "",
        toppings: "",
        special: "",
    })

    const [errors, setErrors] = useState({
        name: "",
    })

    
    

    const onSubmit=evt=>{
        evt.preventDefault()
        axios.post('https://reqres.in/api/orders', formData)
            .then(res=>{
                addToOrder(res.data)
                setFormData({
                    name: "",
                    size: "",
                    sauce: "",
                    toppings: "",
                    special: "",
                })
            }).catch(err=>console.log(err))
    }

    const onChange=evt=>{
        evt.persist()
        let newFormData = {...formData, [evt.target.name]: evt.target.value }
        setFormData(newFormData)
    }

    return (
        <Form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build Your Own Pizza!</h2>
            <img></img>
            <h1>Build Your Own Pizza</h1>

            <div id = 'nameOnOrder'>
                <label for='name-input'>Name:</label>
                <input type='text' id='name-input' name="name" onChange={onChange} /> 
            </div>

            <div id='sizeChoice'>
                <h2>Choice of Size</h2>

                <select name="pizzaSize" id='size-dropdown' onChange={onChange} >
                    <option value=''>--Select a Size--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extraLarge">Extra Large</option>
                </select>
            </div>

            <div id='sauceChoice'>
                <h2>Choice of Sauce</h2>

                <input type='radio' id='marinara' name='sauce' value='Marinara' onChange={onChange} />
                    <label for='marinara'>Marinara</label>

                <input type='radio' id='garRanch' name='sauce' value='Garlic Ranch' onChange={onChange} />
                    <label for='garRanch'>Garlic Ranch</label>

                <input type='radio' id='bbq' name='sauce' value='BBQ' onChange={onChange} />
                    <label for='bbq'>BBQ Sauce</label>

                <input type='radio' id='spinachAlf' name='sauce' value='Spinach Alfredo' onChange={onChange} />
                    <label for='spinachAlf'>Spinach Alfredo</label>
            </div>

            <div id='toppings'>
                <h2>Add Toppings</h2>

                <input type='checkbox' className='toppings' id='pepperoni' value='Pepperoni' onChange={onChange} />
                    <label for='pepperoni'>Pepperoni</label>

                <input type='checkbox' className='toppings' id='sausage' value='Sausage' onChange={onChange} />
                    <label for='sausage'>Sausage</label>

                <input type='checkbox' className='toppings' id='chicken' value='Chicken' onChange={onChange} />
                    <label for='chicken'>Chicken</label>

                <input type='checkbox' className='toppings' id='canadian' value='Canadian Bacon' onChange={onChange} />
                    <label for='canadian'>Canadian Bacon</label>

                <input type='checkbox' className='toppings' id='onions' value='Onions' onChange={onChange} />
                    <label for='onions'>Onions</label>

                <input type='checkbox' className='toppings' id='tomatoes' value='Tomatoes' onChange={onChange} />
                    <label for='tomatoes'>Tomatoes</label>

                <input type='checkbox' className='toppings' id='pineapple' value='Pineapple' onChange={onChange} />
                    <label for='pineapple'>Pineapple</label>

                <input type='checkbox' className='toppings' id='greenPep' value='Green Peppers' onChange={onChange} />
                    <label for='greenPep'>Green Peppers</label>

                <input type='checkbox' className='toppings' id='blackOlives' value='Black Olives' onChange={onChange} />
                    <label for='blackOlives'>Black Olives</label>

                <input type='checkbox' className='toppings' id='extraCheese' value='Extra Cheese' onChange={onChange} />
                    <label for='extraCheese'>Extra Cheese</label>

            </div>
            <div id='special'>
                <h2>Special Instructions</h2>
                <input type='text' id='special-text' name='special' placeholder="Anything else ?" onChange={onChange} />
            </div>
            

            <Footer>
                <input type="number" id="order-button" placeholder="quantity"/>
                <button type='submit' name='button'>Add to Order</button>
            </Footer>
            

        </Form>
    )
}
