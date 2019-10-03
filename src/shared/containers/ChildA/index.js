import React, { Component } from 'react';
import configureStore from '../../configureStore';
import { connect } from 'react-redux';

export function ChildA ({updateCount}){
    
        return (
            // Count is:{this.props.count}
            <div>
               
                <button onClick={updateCount}>increment</button>
               
            </div>
        )
    
}
const mapDispatchToProps =dispatch =>{
    return{
        updateCount:()=>
        dispatch({
            type:'UPDATE_COUNT'
        })
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ChildA)
