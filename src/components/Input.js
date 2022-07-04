import React from 'react';

function Input(props){
  
    return <div className='form-input'>
        <label> {props.label}</label>
        <input name={props.name} type='text' placeholder={props.placeholder}></input>
        
    </div>;
}

export default Input;