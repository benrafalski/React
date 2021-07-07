import React from 'react'
import './myStyles.css' // import the css file

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            {/* using class 'primary' from the css file */}
            {/* using a template string to pass the prop, and a second classname */}
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
