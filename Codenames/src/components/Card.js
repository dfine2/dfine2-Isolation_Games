import React from 'react'
import styled from 'styled-components'
import {useGameState, useGameDispatch} from '../gameState'

const StyledCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 20;
cursor: ${({view}) => view === 'arbiter' ? 'pointer' : 'default'};
color: ${({ card, view }) => card.revealed ? 'white' : view === 'spymaster' ?  `${card.color}` : 'black'};
background-color: ${({card}) => card.revealed ? card.color : `#e0c99b`};
border: ${({isSelected, card}) => isSelected ? `8px inset ${card.color}` : `2px solid black` };
`
const Card = ({card}) => {
    const {view} = useGameState()
    const {flipCard} = useGameDispatch()


    return(
        <StyledCard
        card={card}
        view={view}
            onClick={()=> view === 'arbiter' && flipCard(card.word)}
        >
        {card.word}
        </StyledCard>

    )

}

export default Card
