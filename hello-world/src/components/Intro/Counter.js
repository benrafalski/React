import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount(){
        // use this.setState() to rerender the component
    //    this.setState({
    //        count: this.state.count + 1
    //    }, () => {console.log(this.state.count)})
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrementByFive(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        
        return (
            <div>
                <div>count = {this.state.count}</div>
                <button onClick = {() => this.incrementByFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
