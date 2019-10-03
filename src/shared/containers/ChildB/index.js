import React, { Component } from 'react'
import { connect } from 'react-redux';
export class ChildB extends Component {
   
    render() {
        console.log("prop state " +this.props.count);
        return (
            <div>        
    <h4>Count is :{this.props.count}</h4>
        
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
