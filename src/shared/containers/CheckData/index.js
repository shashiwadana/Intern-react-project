import React, { Component } from 'react';
import {fetchWorkers} from '../../actions/WorkerActions';
import { connect } from 'react-redux';
import {sendJob} from '../../actions/jobTypeActions';

export class DataCheck extends Component {
   
    constructor(props) {
        super(props)
  
        this.state ={
            skill:'',
            skillId:''
        }
        this. handleSkillChange=this. handleSkillChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    static initialAction() {
        return fetchWorkers();
        
    }

    handleSkillChange(skill){
        this.setState({
         
            skillId: skill.target.value
          });
    }
    
    handleSubmit(event) {
        alert('A skill was submitted: ' + this.state.skillId);
        event.preventDefault();
      }
      
    render() {
        const worker =this.props.worker.workers.workers;
        console.log("worker");
        console.log(this.props.worker.workers.workers);
        console.log(this.state.skillId);
    
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                <select
                value={this.state.skill}
                onChange={this.handleSkillChange}
                >
                {worker.map((optionSkill)=>(<option key={optionSkill.SkillId} value={optionSkill.SkillId}>{optionSkill.SkillTitle}</option>))}
                </select> 
                <input type="submit" value="Submit" />
                </form>

               
            </div>
        )
    }
}
const mapStateToProps = state => ({
   
    worker: state.workerR,
    //job:state.jobR.job
  
});
/*
const mapDispatchToProps =dispatch=>({
   
    workerUpdate: (skill) =>dispatch(loadJob(skill))

});
*/

export default  connect(mapStateToProps)(DataCheck);
