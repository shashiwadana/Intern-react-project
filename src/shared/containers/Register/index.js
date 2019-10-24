import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password: "",
            phonenumber: "",
            usertype: "",    
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handlePhoneNumberChange=this.handlePhoneNumberChange.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
      }
    
      handlePasswordChange(event) {
        this.setState({ password: event.target.value });
      }
    
      handlePhoneNumberChange(event) {
        this.setState({ phonenumber: event.target.value });
      }
    
      handleSelect(event) {
        this.setState({ usertype: event.target.value });
      }

      handleSubmit(event) {
        console.log(this.state.email);
        event.preventDefault();
        fetch("http://127.0.0.1:3001/user/register",{
            method:'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
          UserEmail: this.state.email,
          Password: this.state.password,
          ContactNumber: this.state.phonenumber,
          UserType: this.state.usertype 
            })
        }).then(res => res.json())
        .then(data => console.log(data))
        
       
      }
    render() {
     
        return (
            <div>
              
                <form  onSubmit={this.handleSubmit}>

                <formgroup>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Email"
              id="email"
              required
            />
          </formgroup>
          <formgroup>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Password "
              id="password"
              required
            />
          </formgroup>

          <formgroup>
            <input
              type="number"
              value={this.state.phonenumber}
              onChange={this.handlePhoneNumberChange}
              placeholder="Contact Number"
              id="contactno"
              required
            />
          </formgroup>
           
          <formgroup>
          <select
             
              onChange={this.handleSelect}
              value={this.state.usertype}
            >
             <option value="0">client</option>
             <option value="1">worker</option>
            </select>
          </formgroup>
            
            <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Register


