import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/LoginActions'
export class Login extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        email:"",
        password:""  
       }
       this.handleSubmit=this.handleSubmit.bind(this); 
   }
   handleSubmit(event) {
    console.log(this.state.email);
    
    event.preventDefault();
    fetch("http://127.0.0.1:3001/user/login",{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
    UserEmail:this.state.email,
    Password:this.state.password,
   
      })},{withCredentials:'include'})
      .then (res=>res.json())
      .then (res=>{
        if(res.message==='Authorized'){
        console.log("authorized");
    
        console.log(this.props);
        let { email, password } = this.state;
        this.props.loginU(email,password);
        this.setState({
            email : "",
            password : ""
  
          });
          localStorage.setItem('sessionType', res.result.sessionType);
          localStorage.setItem("UserId" , res.result.UserId);
      }
    else{
      console.log("error");
    }
    })
    
  }
    render() {
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

</form> 
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginU: (email,password) => {dispatch(loginUser(email,password))}
         }
}

const mapStateToProps = (state) =>{
    return{}
}
export default connect (mapStateToProps,mapDispatchToProps) (Login)
