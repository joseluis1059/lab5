import React, { Component } from 'react';

class Classes extends Component {

    constructor(props){
        super(props);
        this.state={
            Classe:[{name:'UX',code:'CC304'},{name:'Teoria',code:'CC320'},
            {name:'Fisica',code:'301'}]
        }
    }

  render() {
    return (
      <div>
         <ul>
            {this.state.Classe.map((item)=><li key={item.name}>{item.code}-{item.name} </li>)}
        </ul>
      </div>
    );
  }
}

export default Classes;
