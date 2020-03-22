import React from "react";
import Header from "./Header";
import ToDo from "./ToDo";
import stylesheet from "./stylesheet.css";

class App extends React.Component {
  componentWillMount() {
    let user_array = [
      {
        name: "Ryuto_Shirakawa",
        like_point: 120,
        liked_point: 12223320,
        img:  "https://pbs.twimg.com/profile_images/1197045010786480128/8GC1D9og_400x400.jpg"
      },
      {
        name: "Manaki_Ikeda",
        like_point: 100,
        liked_point: 0,
        img:  "https://pbs.twimg.com/profile_images/1197045010786480128/8GC1D9og_400x400.jpg"
        
      },
      {
        name: "Daichi_Nakashizu",
        like_point: 100,
        liked_point: 0,
        img:  "https://pbs.twimg.com/profile_images/1197045010786480128/8GC1D9og_400x400.jpg"

      }
    ];
    let setjson = JSON.stringify(user_array);
    /*global localStorage*/
    localStorage.setItem("user_info", setjson);
  }

  constructor(props) {
    super(props);

    this.state = {
      user_info: JSON.parse(localStorage.getItem("user_info")),
      selected:0,
    };

  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.user_info[this.state.selected].name}
          likePoint={this.state.user_info[this.state.selected].like_point}
          likedPoint={this.state.user_info[this.state.selected].liked_point}
          img={this.state.user_info[this.state.selected].img}
          userInfos= {this.state.user_info}
        />
        <ToDo />
      </div>
    );
  }
}

export default App;
