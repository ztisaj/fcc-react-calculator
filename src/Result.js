import React, {Component} from 'react';

class Result extends Component {
  render() {
    let {result} = this.props;
    let {userInput} = this.props;
    return (
      <div>
        <div className="title">
          <h2> JS Calculator </h2>
        </div>
        <div className="result">
          <p className="userInput">{userInput}</p>
          <p className="answer">{result}</p>
        </div>
      </div>
      );
    }
  }

export default Result;
