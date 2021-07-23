import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeHeader = styled.div`
    text-align: center;
`

export default function HomePage() {
    return (
        <div id='homepage'>
            <HomeHeader id='homeHeader'>
                <img></img>
                <h1>Your favorite food, delivered while coding</h1>

                <Link to='/pizza' id='order-pizza'>
                    <button>Pizza?</button>
                </Link>

            </HomeHeader>
            
        </div>
    )
}
