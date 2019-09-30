import React, { Component } from "react";
import  Header  from "../../components/common/Header";
import  Footer  from "../../components/common/Footer";
//import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header/>         
         <div>tests</div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
