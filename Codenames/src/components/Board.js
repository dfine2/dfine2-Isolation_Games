import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

`
const Grid = styled.div`
    margin: 32px;
    margin-top: 0px;
    padding: 16px;
    display: grid;
    grid-template-rows: repeat(5, 100px);
    grid-template-columns: repeat(5, 200px);
    grid-gap: 15px;
`


const Board = ({cards}) => {
    const words = []
    if(cards.length > 0){
        for (let i = 0; i < 25; i++) {
            words.push(<Card card={cards[i]} />)
        }
    }
    return (
    <Container>
        <Grid>
            {words}
        </Grid>
    </Container>
    )
}

export default Board
