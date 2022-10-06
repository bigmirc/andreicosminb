import React from 'react';

const Input = (props) => (
  <>
      <div>
        <label for={props.label}>{props.label}</label>
        <input type="text" value={props.value} id={props.label} name={props.label} placeholder={props.label}/>
      </div>
  </>
);

export default Input;
