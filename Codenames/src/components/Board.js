import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
margin: 32px;
padding: 16px;
display: grid;
grid-template-rows: repeat(5, 50px);
grid-template-columns: repeat(5, 150px);
grid-gap: 15px;
`
const Board = ({cards}) => {
    const words = []
    for (let i = 0; i < 25; i++) {
        words.push(<div style={{ color: cards[i].color, padding: '8px' }}>  {`${cards[i].word}  `} </div>)
    }
    return (<Grid>{words}</Grid>)
}

export default Board
