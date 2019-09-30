import React, { Component } from 'react'

export class ChildB extends Component {
    render() {
        return (
            <div>
                


    <h4>Count of Component A is :{this.props.count}</h4>

               
            </div>
        )
    }
}

export default ChildB
