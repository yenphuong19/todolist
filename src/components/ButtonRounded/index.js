import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import './ButtonRounded.scss';

function ButtonRounded () {
    return (
        <div className="btns">
            <ButtonPrimary />  
            <ButtonSecondary />  
        </div>
    )
}

export default ButtonRounded;