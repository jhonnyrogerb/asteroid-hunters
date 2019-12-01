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

export const ModalBody = styled.div`
    background: #20242A;
    color: rgba(255, 255, 255, .87);
    border-bottom: 5px solid #20242A;
    transition: all .5s;
    margin: 0px 10px;
    height: 100%;
`;


export const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
`;


export const ModalTitle = styled.div`
    text-align: center;
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 8px 8px 20px;
    color: rgba(255, 255, 255, .87);
`;
