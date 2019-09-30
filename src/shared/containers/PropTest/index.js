import React, { Component } from 'react';


 class PropTest extends Component {
    render() {
        return (
            <div className="prop">
            
            <h4>Prop Test Component</h4>
            <p>Passed prop is :{this.props.value}</p>
         
                
            </div>
        )
    }
}

export default PropTest
