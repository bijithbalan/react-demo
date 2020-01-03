import React from 'react';

const person = (props) => {
    // props is managed from outside the component
    return (
        <div>
            <p>I am {props.name} and I am {props.age} year old! {props.children}</p>
        </div>
    )
}
// when using class-based components, it's this.props

export default person;