import React, { Component } from 'react';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PropTest from "../../containers/PropTest/index";

class About extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            name:"ABC",
        };
    }
    
    render() {
        return (
            <div className="about">
            

            <Header/>
            <h4>Name is:{this.state.name}</h4>
            <button onClick={() => this.setState({name: 'EFG'})}>click
            </button>
            <PropTest value={"Test123"}/>
            
            <Footer/>
                
            </div>
        );
    }
}

export default About;
