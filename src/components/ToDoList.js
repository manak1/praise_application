import React from 'react';
import ToDoItem from './ToDoItem';


class ToDoList extends React.Component {
  render(){
    let data = this.props.data;
    
    if( data.length === 0 ){
      return(
        <div className='todozero'>Nothing to be praised</div>
        );
    } else {
      return(
        <ul className='todolist'>{
          data.map( i => <ToDoItem key={i.id} item={i} remove={this.props.remove} /> )
        }
        </ul>
        );
    }
  }
}

export default ToDoList;