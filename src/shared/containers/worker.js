import React, { Component } from 'C:/Users/shashiwadana_n/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
//let skillList = [];
export class DataCheck extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
           
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
         
          skillId: skill.target.value
        });
      }
      handleSubmit(event) {
        alert('A skill was submitted: ' + this.state.skillId);
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
                <option key={optionSkill.value}>{optionSkill.label}</option>
                ))}
                </select>
                
                    <input type="submit" value="Submit" />
                 </form>
            </div>
        )
    }
}

export default DataCheck
