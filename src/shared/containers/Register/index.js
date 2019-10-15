import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div>
                <form>
                <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    <button type="submit" class="registerbtn">Register</button>
                </form>
            </div>
        )
    }
}

export default Register


