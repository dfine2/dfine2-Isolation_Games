import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-rows: repeat(5, 40px);
grid-template-columns: repeat(5, 40px);
grid-gap: 5px;

position: relative;
`
const Square = styled.div`
background-color: ${({color}) => color};
width: 40px;
height: 40px;
`
const InnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
width: 240px;
height: 240px;
`

const OuterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: darkGrey;
width: 300px;
height: 300px;
border: ${({extraCard}) => `8px inset ${extraCard}`};
`
const KeyCard = ({pattern, extraCard}) => {
    const squares = []
    for(let i=0; i<25; i++){
        squares.push(<Square color={pattern[i]} key={i}/>)
    }
    return (
    <OuterContainer extraCard={extraCard}>
        <InnerContainer>
            <Grid>
                {squares}
            </Grid>
        </InnerContainer>
    </OuterContainer>

    )

}

export default KeyCard
