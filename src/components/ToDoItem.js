import React from 'react';

class ToDoItem extends React.Component{
  render(){
    let id = this.props.item.id;
    let name = this.props.item.name;
    return(
      <li key={id}>
        {name}
        <button type='button' data-id={id} onClick={this.props.remove}>削除</button>
      </li>
      );
  }
}

export default ToDoItem;