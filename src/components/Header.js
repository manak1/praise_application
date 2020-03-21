import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <div className="l-header">
        <div className="l-header__wrapper">
            <div className="l-header__box">
                <img className="l-header__img" 
                  src={"https://pbs.twimg.com/profile_images/1197045010786480128/8GC1D9og_400x400.jpg"} alt={''} 
                />
                <select name="" id="" className="l-header__select">
                </select>
            </div>

            <div className="l-header__infos">
                <div className="l-header__info">
                    <p className="l-header__clap">拍手できる数 </p>
                    <p>100</p>
                </div>

                <div className="l-header__info">
                    <p className="l-header__clap">拍手された数 </p>
                    <p>0</p>
                </div>
            </div>
        </div>

    </div>
      );
  }
}

export default Header;