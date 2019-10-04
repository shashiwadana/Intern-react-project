import React, { Component } from 'react'
import { connect } from 'react-redux';
//import updateCount from '../../actions/CountActions';
import {countUpdate} from '../../actions/CountActions';
function ChildA ({count,countUpdate}) {
    
        return (           
            <div>             
                <button onClick={countUpdate}>increment</button>           
                <h6>count : {count}</h6> 
                             
            </div>
        );
    
}
const mapStateToProps = state =>({
    
    count:state.count
});

const mapDispatchToProps =dispatch=>({
   
    countUpdate: () =>dispatch(countUpdate()),

});
export default connect(mapStateToProps,mapDispatchToProps)(ChildA)
