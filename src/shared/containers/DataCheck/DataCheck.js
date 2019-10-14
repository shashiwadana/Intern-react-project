import React, { Component } from 'react';
import {fetchWorkers} from '../../actions/WorkerActions';
import { connect } from 'react-redux';
import loadJob from '../../actions/jobTypeActions';

export class DataCheck extends Component {
   
    constructor(props) {
        super(props)
  
        this.state ={
            skill:''
        }
        this. handleSkillChange=this. handleSkillChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    static initialAction() {
        return fetchWorkers();
        
    }
    handleSkillChange(skill){
       return this.props.workerUpdate(skill.target.value);
    }
    handleSubmit(event) {
        alert('A skill was submitted: ' + this.props.job);
        event.preventDefault();
      }
      
    render() {
        const worker =this.props.worker.workers.workers;
        console.log(worker);
        
    
        return (
            <div>
                
                <select
                value={this.state.skill}
                onChange={this.handleSkillChange}
                >
                {worker.map((optionSkill)=>(<option key={optionSkill.SkillId} value={optionSkill.SkillId}>{optionSkill.SkillTitle}</option>))}
                </select> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
   
    worker: state.workerR,
    job:state.jobR.job
  
});
const mapDispatchToProps =dispatch=>({
   
    workerUpdate: () =>dispatch(loadJob())

});

export default  connect(mapStateToProps,mapDispatchToProps)(DataCheck);
