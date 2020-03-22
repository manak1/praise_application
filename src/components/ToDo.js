import React from 'react';
import ToDoCreate from './ToDoCreate';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ToDo: [],
      max_id: 0
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  handleClick(value){
    let id = this.state.max_id;
    let ToDo = this.state.ToDo;
    ToDo.push({id: id+1, name: value});
    
    this.setState({
      ToDo: ToDo,
      max_id: id + 1
    });

    console.log(this.state.ToDo)
  }
  
  handleRemove(e){
    let cut = this.state.ToDo;
    let id = Number( e.currentTarget.getAttribute('data-id'));
    let ToDo = cut.filter( i => i.id !== id);

    
    this.setState({
      ToDo: ToDo
    });
  }
  
  render(){
    return(
      <div>
        <ToDoCreate onClick={this.handleClick} />
        <ToDoList data={this.state.ToDo} remove={this.handleRemove} />
      </div>
      );
  }
}

export default ToDo;