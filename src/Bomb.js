// your Bomb code here!

import { Component } from "react";
import React from "react"

export default class Bomb extends Component {

    constructor(props){
        super(props)
        this.state = { 
            secondsLeft: this.props.initialCount
        }
    }

    // changeTimer = () => {
    //     this.setState({
    //       secondsLeft: this.props.secondsLeft-1
    //     })
    //   }

    returnValue() {
        if(this.state.secondsLeft !== 0){
            return `${this.state.secondsLeft} seconds left before I go boom!`
           
        }
        else {
            return 'Boom!'
        }
    
    }

render() {
    return ( 
        <div>
            {this.returnValue()}
        </div>
    )
}
    
}