import { render } from "@testing-library/react"
import { Component } from "react";
import CounterButton from "./CounterButton.jsx"

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this) 
        this.reset = this.reset.bind(this)


    }
    
    increment(by){
        this.setState({
            counter: this.state.counter + by
        })
    }

    reset(){
        this.setState({
            counter: 0
        })
    }

    render() {
        return(
            <>
                <CounterButton by={1} incrementMethod={this.increment}/>
                <CounterButton by={2} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <CounterButton by={100} incrementMethod={this.increment}/>
                <span>{this.state.counter}</span>
                <button onClick={this.reset}>reset</button>
            </>
        )
        }
}

export default Counter 