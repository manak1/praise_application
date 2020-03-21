import React from 'react';
import ReactDOM from 'react-dom';

class ToDoCreate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newtodo: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.newtodo).focus();
  }
  
  handleChange(e){
    this.setState({
      newtodo: e.target.value
    });
  }
  
  handleSubmit(e){
    e.preventDefault();
    
    let newtodo = this.state.newtodo;
    if(newtodo === '' || newtodo.length < 5){
      return(false);
    }
    
    if (newtodo !== '' && window.confirm('本当に登録しますか?')){
      this.props.onClick(newtodo);
      this.setState({newtodo: ''});
    }
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea ref='newtodo' onChange={this.handleChange} />
        <button>投稿</button>
      </form>
      );
  }
}

export default ToDoCreate;