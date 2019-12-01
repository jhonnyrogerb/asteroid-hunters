import React from "react";
import Decimal from 'decimal.js';

import {ModalBody, ModalTitle, ModalContent} from './style'
import Rodal from "rodal";

//TODO: normalize data (api proxy)
const Modal = ({children, visible, onClose, title}) => {
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            animation={'slideUp'}
            closeOnEsc
            customStyles={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                padding: '10px',
                zIndex: '999999999',
                width: '98%',
                height: '95%',
                top: 0
            }}
            customMaskStyles={{
                background: 'rgba(80, 80, 80, 0.9)',
                zIndex: '999999999'
            }}
        >
            <ModalContent>
                <ModalTitle>{title}</ModalTitle>
                <ModalBody>{children}</ModalBody>
            </ModalContent>
        </Rodal>
    );
};

export default Modal;