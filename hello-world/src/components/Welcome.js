import React, { Component } from 'react';


// this is a class component, when using props you must include the 'this' keyword
class Welcome extends Component {
    render(){
        return (
            <h1>
                Welcome {this.props.name} a.k.a {this.props.heroName}
            </h1>
        )
    }
}

export default Welcome;