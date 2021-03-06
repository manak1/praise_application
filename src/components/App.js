import React from 'react';
import Header from './Header';
import ToDo from './ToDo';
import stylesheet from "./stylesheet.css";


class App extends React.Component {
  componentWillMount(){
    let user_array = [
      {
        name: 'Ryuto_Shirakawa',
        like_point: 100,
        liked_point: 0,
        img: '',
      },
        {
          name: 'Manaki_Ikeda',
          like_point: 100,
          liked_point: 0,
          img: '',
        },
        {
          name: 'Daichi_Nakashizu',
          like_point: 100,
          liked_point: 0,
          img: '',
        },
      ];
      let setjson = JSON.stringify(user_array);
      /*global localStorage*/
      localStorage.setItem('user_info',setjson);
  }
  
  render() {
    return(
      <div className='App'>
        <Header />
        <ToDo />
      </div>
      );
  }
}

export default App;
