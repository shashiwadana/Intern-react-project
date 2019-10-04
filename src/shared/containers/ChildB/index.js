import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ChildB extends Component {
       
    constructor(props) {
        super(props)
    
    }
    
    render(){
        const count=this.props.count;
        console.log(count);
            
        return (
                <div>
        <h4>count :{count} </h4> 
                </div>
            )
        }
 
}

const mapStateToProps = state =>({
    count:state.count
}

)
export default connect(mapStateToProps) (ChildB)
