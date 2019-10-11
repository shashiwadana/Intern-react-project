import React, { Component } from 'react'
let skillList = [];
export class DataCheck extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            skill: "",
            skillId: "",
        }
       this. handleSkillChange=this. handleSkillChange.bind(this); 
    }
    componentDidMount() {
        // worker skill selection
    
        fetch("http://localhost:3001/dataservices/getallskills")
        .then (res=>res.json())
          .then(res => {
              console.log(res);
            let temArray = {};
            for (let i = 0; i < res.data.recordsets[0].length; i++) {
              temArray["value"] = res.data.recordsets[0][i].SkillId;
              temArray["label"] = res.data.recordsets[0][i].SkillTitle;
              skillList.push(temArray);
              console.log(skillList);
              temArray = {};
            }
          })
          .catch(function(error) {
             console.log(error);
          });
      }
    
      handleSkillChange(skill) {
        this.setState({
          skill: skill,
          skillId: skill.value
        });
      }
    render() {
        return (
            <div>
                <select
                      value={this.state.skill}
                      onChange={this.handleSkillChange}
                     options={skillList}
                      placeholder="Skills"
                    /> 
            </div>
        )
    }
}

export default DataCheck
