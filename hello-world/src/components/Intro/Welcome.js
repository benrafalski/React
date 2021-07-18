import React, { Component } from 'react';


// this is a class component, when using props you must include the 'this' keyword
class Welcome extends Component {
    render(){
        const {name, heroName} = this.props;
        // const {state1, state2} = this.state
        return (
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}

export default Welcome;