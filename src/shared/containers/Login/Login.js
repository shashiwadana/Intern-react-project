import React, { Component } from 'react'
//import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/LoginActions'
class Login extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        email:"",
        password:""  
       }
       this.handleSubmit=this.handleSubmit.bind(this); 
   }
   
   handleSubmit(event) {
    
    event.preventDefault();
    let {email,password} =this.state;        
    this.props.login(email,password);
    
  }
    render() {
        let {isloginPending, isloginSuccess, isloginError} = this.props;
        console.log(isloginPending);
        
        return (
            <div>
                <form  onSubmit={this.handleSubmit}> 

<formgroup>
<input
type="email"
value={this.state.email}
onChange={(event)=>{this.setState({ email: event.target.value })}}
placeholder="Email"
id="email"
required
/>
</formgroup>
<formgroup>
<input
type="password"
value={this.state.password}
type="password"
onChange={(event)=>{this.setState({ password: event.target.value })}}
placeholder="Password "
id="password"
required
/>
</formgroup>
<input type="submit" value="Submit" />
{ isloginPending && <div>Please wait...</div> }
{ isloginSuccess && <div>Success.</div> }
{ isloginError && <div>{isloginError.message}</div> }

</form> 
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       login: (...args) => dispatch(loginUser(...args))
   };
}

const mapStateToProps = (state) =>{
    return{
        isloginPending: state.loginR.isloginPending,
        isloginSuccess:state.loginR.isloginSuccess,
        isloginError:state.loginR.isloginError 
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Login);
