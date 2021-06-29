import React from 'react'

function FunctionClick() {
    
    function clickHandler(){
        console.log('button clicked');
    }
    
    return (
        <div>
            {/* do not use parenthisies or you will be actually calling the function */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
