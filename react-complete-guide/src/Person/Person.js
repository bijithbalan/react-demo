import React from 'react';
import './Person.css';

const person = (props) => {
    // props is managed from outside the component
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I am {props.age} year old! {props.children}</p>
        </div >
    )
}
// when using class-based components, it's this.props

export default person;