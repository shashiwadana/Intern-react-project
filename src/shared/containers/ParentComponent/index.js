import React, { Component } from 'react';
import ChildA from "../../containers/ChildA";
import ChildB from "../../containers/ChildB";

 class ParentComponent extends Component {
     state={
         count:0
     };
     increment=()=>{
         this.setState({
             count:this.state.count+1
         });
     }
    render() {
       
        return (
            <div className="parent">
            
               <ChildA count={this.state.count}
                        increment={this.increment}/>
                        
                <ChildB count={this.state.count}/>
                
            </div>
        )
    }
}

export default ParentComponent
