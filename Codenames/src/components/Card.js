import React from 'react'
import styled from 'styled-components'
import {useServerDispatch} from '../api'

const StyledCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 20;
color: ${({ card }) => card.revealed ? 'white' : `black`};
background-color: ${({card}) => card.revealed ? card.color : `#e0c99b`};
border: ${({isSelected, card}) => isSelected ? `8px inset ${card.color}` : `2px solid black` };
`
const Card = ({card}) => {
    const [isSelected, setIsSelected] = React.useState(false)
    const {flipCard} = useServerDispatch()

    return(
        <StyledCard
        card={card}
        isSelected={isSelected}

        onClick={()=>flipCard(card.word)}
        >
        {card.word}
        </StyledCard>

    )

}

export default Card
