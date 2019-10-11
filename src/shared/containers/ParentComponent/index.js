import React, { Component } from 'react';
import ChildA from "../../components/ChildA";
import ChildB from "../../components/ChildB";

 class ParentComponent extends Component {
     
    render() {
       
        return (
            <div className="parent">
            
              <ChildA />
                       
               <ChildB />
                
            </div>
        )
    }
}

export default ParentComponent
