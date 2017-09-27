/**
 * Created by Jack on 26/09/2017.
 */
import React from 'react';
import style from '../style';
function Button(props) {
    return (
        <div onClick={props.buttonClick} style={{...style.button, ...style[props.buttonType]}}>
            <img style={{...style.buttonImg}} src={props.imageSource} alt='button' type={props.buttonType}/>
        </div>
    )
}

export default Button;