import React, { Component } from 'react';
import configureStore from '../../configureStore';
import { connect } from 'react-redux';
export function ChildA ({dispatch}){
    
        return (
            // Count is:{this.props.count}
            <div>
               
                <button onClick={()=>dispatch({type:'UPDATE_COUNT'})}>increment</button>
               
            </div>
        )
    
}

export default connect(
    null,
    null
)(ChildA)
