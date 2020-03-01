import React from 'react';
import Popup from 'reactjs-popup';

export default (component, buttonName) => {

    const onClose = () => {
    };

    const onOpen = () => {
    };

    return (
        <Popup modal
               onClose={onClose}
               onOpen={onOpen}
               trigger={
                   <button> {buttonName}</button>
               }>
            {component}
        </Popup>
    )
}
