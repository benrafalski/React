import React from 'react';

// this is a functional component, these are prefferable
// naming convention for props is to use 'props' as a parameter name, access props in JSX using {props.attribute}
// {props.children} gets the element from inside of the <Greet> tags in App.js
const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                {/*These are the destructured props attained from the parameter
                can also use const {name, heroName} = props if using props as a parameter
                */}
                Hello {name} a.k.a {heroName}
            </h1>
            {/*props.children*/}
        </div>
    )
}
export default Greet;