import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* use props to call the greetHandler */}
            {/* passing 'child' as a parameter allows it ot be used in ParentComponent */}
           <button onClick={() => props.greetHandler('child')}>Greet Parent</button> 
        </div>
    )
}

export default ChildComponent
