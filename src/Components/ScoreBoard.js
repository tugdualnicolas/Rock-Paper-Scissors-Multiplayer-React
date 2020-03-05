import React from "react";

class Scoreboard extends React.Component {
  render() {
    const { scores } = this.props;
    return (
      <div className="scoreboard">
        <div id="user-label" className="badge">
          {this.props.username}
        </div>
        <div id="comp-label" className="badge">
          {this.props.opponentname}
        </div>
        <span id="user-score">{scores[0].userscore}</span>:
        <span id="comp-score">{scores[1].compscore}</span>
      </div>
    );
  }
}
export default Scoreboard;
