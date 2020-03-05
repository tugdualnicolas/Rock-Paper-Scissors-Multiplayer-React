import React from "react";

class Result extends React.Component {
  render() {
    const { resultmsg } = this.props;
    const { resultimages } = this.props;
    return (
      <div className="result">
        <div className="elem1" id="user">
          <p>User</p>
          <img src={resultimages[0].image} alt="resultimage" id="user-img" />
        </div>
        <div className="elem1" id="welcome">
          <p id="result-message">{resultmsg}</p>
        </div>
        <div className="elem1" id="computer">
          <p>Computer</p>
          <img src={resultimages[1].image} alt="compimage" id="comp-img" />
        </div>
      </div>
    );
  }
}

export default Result;
