import React, { Component } from 'react'

export class ChildA extends Component {
    
    
    render() {
        

        return (
           
            <div>
                
                <div>
                count is:{this.props.count}
                </div>
                <button onClick={this.props.increment}>increment</button>
               
            </div>
        )
    }
}

export default ChildA
