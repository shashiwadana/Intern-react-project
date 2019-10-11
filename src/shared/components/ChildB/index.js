import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ChildB extends Component {
   
    
    render(){
          
        return (
                <div>
        <h4>count :{this.props.count} </h4> 
                </div>
            )
        }
 
}

const mapStateToProps = state =>({
    count:state.countR.count
}

)
export default connect(mapStateToProps) (ChildB)
