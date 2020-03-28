import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Grid = styled.div`
margin: 32px;
padding: 16px;
display: grid;
grid-template-rows: repeat(5, 100px);
grid-template-columns: repeat(5, 200px);
grid-gap: 15px;
`


const Board = ({cards}) => {
    const words = []
    for (let i = 0; i < 25; i++) {
        words.push(<Card  card={cards[i]}/>)
    }
    return (<Grid>{words}</Grid>)
}

export default Board
