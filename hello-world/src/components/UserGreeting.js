import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    // conditional rendering
    render() {
        /* Approach 1 using an if else/statement */
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Ben</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        /* -------------------------------- */
        /* Approach 2, element variables */
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome ben</div>
        // }else{
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>
        /* ---------------------------------------- */
        /* Approach 3, ternary conditional operator */
        return(
            this.state.isLoggedIn ? // condition ?
            <div>welcome ben</div> : // evaluates to true :
            <div>welcome guest</div> // evaluates to false
        )
    }
}

export default UserGreeting
