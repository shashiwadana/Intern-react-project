import React, { Component } from 'react';
import ChildA from "../../containers/ChildA";
import ChildB from "../../containers/ChildB";

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
