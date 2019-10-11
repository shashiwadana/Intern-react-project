import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchUsers } from '../../actions/UserActions';
import configureStore from '../../configureStore';


class DbTest extends Component {

    constructor(props) {
       super(props)   
   }

   //Fetch server side data
   static initialAction() {
       return fetchUsers();
       
   }
  
    render() {
        const user =this.props.user;
        const age=this.props.age;
    
        
    
        return (
            
            <div className="usersWrapper">
            <h6>users: {user}</h6> 
            <h6>users: {age}</h6> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
    user: state.usersR.users.users[0].Name,
    age:state.usersR.users.users[0].Age
});



export default connect(mapStateToProps)(DbTest);
 