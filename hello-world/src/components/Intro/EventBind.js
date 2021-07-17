import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello',
             off: true
        }

    //    this.clickHandler = this.clickHandler.bind(this)
    }

    /* clickHandler(){
        if(this.state.off === true){
            this.setState({
                message: 'Goodbye',
                off: false
            })
        }else{
            this.setState({
                message: 'hello',
                off: true
            })
        }
    } */

    clickHandler = () => {
        if(this.state.off === true){
            this.setState({
                message: 'Goodbye',
                off: false
            })
        }else{
            this.setState({
                message: 'hello',
                off: true
            })
        }
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* approach 1 <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* approach 2, see lines 16-28 <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* aproach 3/4 , best approach, see line 13 in the constructor(3) or 30-42(4) */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
