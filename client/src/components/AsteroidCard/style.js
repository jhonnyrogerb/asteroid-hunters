import styled from 'styled-components';

const colors = {
    Red: '#D7381F',
    DarkOrange: '#F85B26',
    Orange: '#FC9428',
    LightOrange: '#FEAF41',
    Yellow: '#FFC980',
    LightYellow: '#FFE4BF',
    White: '#FAF3F2'
}


export const Card = styled.div`
    width: 360px;
    cursor: pointer;
    background: #20242A;
    margin: 10px;
    padding: 10px;
    box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.9);
    color: rgba(255, 255, 255, .87);
    border-bottom: 5px solid #20242A;
    transition: all .5s;
    ${({ isCurrentCard, borderBottomColor }) => isCurrentCard && `border-bottom-color: ${colors[borderBottomColor]}`}

    &:hover {
        border-bottom-color: ${({ borderBottomColor }) => colors[borderBottomColor]};
        transform: scale(0.94)
    }
`;


export const CardHeader = styled.div`
    text-align: center;
    font-weight: bolder;
    font-size: 1.1rem;
    margin-bottom: 10px;
`;


export const CardBody = styled.div`
    display: flex;
    flex-flow: row;
    flex-flow: wrap;
`;


export const CardImageContainer = styled.div`
    width: 100px;
    overflow: hidden;
`;


export const CardImage = styled.img`
    width: 100%
`;


export const CardContent = styled.div`
    flex: 1;
    padding-left: 20px;
    font-size: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
`;

export const CardTextBold = styled.span`
    font-weight: bolder;
`;


export const CardText = styled.span`
    color: rgba(255, 255, 255, .77);
`;

export const CardInfo = styled.div`
    margin-bottom: 4px
`;

