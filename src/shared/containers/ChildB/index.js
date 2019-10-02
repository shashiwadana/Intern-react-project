import React, { Component } from 'react'
import { connect } from 'react-redux';
export class ChildB extends Component {
   
   
    render() {
        return (
            <div>
                


    <h4>Count of Component A is :{this.props.count}</h4>

               
            </div>
        )
    }
}
const mapStateToProps = (state) => 
   {
    return {count: state.count};
   }
  

export default connect (
    mapStateToProps,
    null
)(ChildB)
