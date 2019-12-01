import styled from 'styled-components';

const colors = {
    Red: '#D7381F',
    DarkOrange: '#F85B26',
    Orange: '#FC9428',
    LightOrange: '#FEAF41',
    Yellow: '#FFC980',
    LightYellow: '#FFE4BF',
    White: '#FAF3F2'
};


export const Card = styled.div`
    background: #20242A;
    padding: 10px;
    color: rgba(255, 255, 255, .87);
    border-top: 5px solid #20242A;
    ${({borderTopColor}) => `border-top-color: ${colors[borderTopColor]}`}
`;


export const CardBody = styled.div`
    display: flex;
    flex-flow: row;
    flex-flow: wrap;
    align-items: center;
    flex-direction: column;
`;


export const CardContent = styled.div`
    flex: 1;
    padding: 10px 20px;
    font-size: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    align-center: 100%;
`;


export const CardImageContainer = styled.div`
    width: 120px;
    overflow: hidden;
`;


export const CardImage = styled.img`
    width: 100%
`;


export const CardTextBold = styled.span`
    font-weight: bolder;
`;


export const CardText = styled.span`
    color: rgba(255, 255, 255, .77);
`;

export const CardInfo = styled.div`
    margin-bottom: 10px
`;

