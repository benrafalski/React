import React from 'react';

// this is a functional component, these are prefferable
// naming convention for props is to use 'props' as a parameter name, access props in JSX using {props.attribute}
// {props.children} gets the element from inside of the <Greet> tags in App.js
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}
export default Greet;