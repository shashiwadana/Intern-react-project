import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchUsers } from '../../actions/UserActions';
import configureStore from '../../configureStore';
export class DbTest extends Component {
   
    constructor(props) {
       super(props)
   
   }
   //Fetch server side data
   static initialAction() {
       return fetchUsers();
     
   }
  
    render() {
        const user = this.props.user;
       // console.log(configureStore().getState());
        console.log("user is ");
        console.log(user);
      // console.log(this.props.users);
       
        return (
            <div className="usersWrapper">
            <h6>users: </h6>
               
            </div>
        )
    }
}
const mapStateToProps = state => ({
    deal: state. usersR.users.users
});



export default  connect (mapStateToProps)(DbTest)
 