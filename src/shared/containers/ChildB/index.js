import React, { Component } from 'react'
import { connect } from 'react-redux';

export function ChildB ({count}) {
        return (
            <div>
    <h4>count :{count} </h4> 
            </div>
        )
 
}

const mapStateToProps = state =>({
    count:state.count
}

)
export default connect(mapStateToProps) (ChildB)
