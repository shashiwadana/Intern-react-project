import React, { Component } from 'react'
//let skillList = [];
export class DataCheck extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            skill: "",
            skillId: "",
            skillList : []
        }
       this. handleSkillChange=this. handleSkillChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this); 
    }
    componentDidMount() {
        // worker skill selection
    
        
fetch("http://localhost:3001/dataservices/getallskills")
.then (res=>res.json())
.then(res => {
   this.setState({
     skillList: res.recordsets[0].map((recordSet) => ({
       label: recordSet.SkillTitle,
       value: recordSet.SkillId,
     }))
   });       
});
          
      }
    
      handleSkillChange(skill) {
        this.setState({
          skill: skill,
          skillId: skill.value
        });
      }
      handleSubmit(event) {
        alert('A skill was submitted: ' + this.state.skill);
        event.preventDefault();
      }
    render() {
        return (
            <div>
               
                 <form onSubmit={this.handleSubmit}>
                 <select
                    value={this.state.skill}
                    onChange={this.handleSkillChange}
                    placeholder="Skills"
                    >
                {this.state.skillList.map((optionSkill) => (
                <option value={optionSkill.value}>{optionSkill.label}</option>
                ))}
                </select>
                
                    <input type="submit" value="Submit" />
                 </form>
            </div>
        )
    }
}

export default DataCheck
