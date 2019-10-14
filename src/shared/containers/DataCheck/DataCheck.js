import React, { Component } from 'react';
import {fetchWorkers} from '../../actions/WorkerActions';
import { connect } from 'react-redux';
//let skillList = [];
export class DataCheck extends Component {
   
    constructor(props) {
        super(props)
    
    }

    static initialAction() {
        return fetchWorkers();
        
    }

      
    render() {
        const worker =this.props.worker.workers.workers;
        console.log(worker);
        
        const workerHtml = worker.map((w,i)=>{
            return <div>{w.SkillTitle}</div>
        })
    
        return (
            <div>
               <h6>workers: {workerHtml}</h6> 
                 
            </div>
        )
    }
}
const mapStateToProps = state => ({
   
    worker: state.workerR
  
});


export default  connect(mapStateToProps)(DataCheck);
