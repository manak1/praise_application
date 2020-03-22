import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfos: [], selected_user: 0 };
  }

  render() {
    return (
      <div className="l-header">
        <div className="l-header__wrapper">
          <div className="l-header__box">
            <img className="l-header__img" src={this.props.img} alt={""} />
            <p class="l-header__name">{this.props.name}</p>
            <select name="" id="" className="l-header__select">
            {this.props.userInfos.map(data => {
                return <option>{data.name}</option>;
              })}
            </select>
          </div>

          <div className="l-header__infos">
            <div className="l-header__info">
              <p className="l-header__clap">拍手できる数 </p>
              <p>{this.props.likePoint}</p>
            </div>

            <div className="l-header__info">
              <p className="l-header__clap">拍手された数 </p>
              <p>{this.props.likedPoint}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
