import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ben'
        }

        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LofecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifcycleB componentDidMount')
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
               LifecycleB 
            </div>
        )
    }
}

export default LifecycleB
