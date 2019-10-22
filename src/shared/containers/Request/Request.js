import React, { Component } from 'react';
import {fetchRequests} from '../../actions/RequestAction';
import {connect} from 'react-redux';
 class Request extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     static initialAction(){
       return fetchRequests();
     }
    render() {
        const request = this.props.reqst;
        return (
            <div>
                {request}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    reqst:state.requestR.reqst.reqst
})
export default connect(mapStateToProps)(Request);
