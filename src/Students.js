import React, { Component } from 'react';

class Students extends Component {
    constructor(props){
        super(props);
        this.state={
            Student:[{name:'Jose',lastname:'David',cuenta:21611118},{name:'Julio',lastname:'Carias',cuenta:21611117},
            {name:'Jorge',lastname:'Santos',cuenta:21611116}]
        }
    }
  render() {
    return (
      <div>
        <ul>
            {this.state.Student.map((item)=><li key={item.name}>{item.cuenta} -{item.name} -{item.lastname}</li>)}
        </ul>
      </div>
    );
  }
}

export default Students;
