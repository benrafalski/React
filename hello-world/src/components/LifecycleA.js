import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ben'
        }

        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LofecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifcycleA componentDidMount')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>
                    LifecycleA 
                </div>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
