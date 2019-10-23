import React, { Component } from 'react';
import {fetchRequests} from '../../actions/RequestAction';
import {connect} from 'react-redux';
 class Request extends Component {
     constructor(props) {
         super(props)
     
     }
     static initialAction(){
       
       return fetchRequests();
     }
    render() {
        const request = this.props.reqst.reqsts;
        console.log(this.props.reqst);
        
        const Order = request.map((id)=>{
            return<div>{id.OrderId}</div>
        });
        
        return (
            <div>
                {Order}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    reqst:state.requestR.reqsts
})
export default connect(mapStateToProps)(Request);
