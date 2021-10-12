import { Component } from "react";

class CounterButton extends Component {
    constructor(){
        super();
    }
    
    render(){
        return(
            <>
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.incrementMethod(-this.props.by)}>-{this.props.by}</button>
            </>
        )
    }
    
}

export default CounterButton