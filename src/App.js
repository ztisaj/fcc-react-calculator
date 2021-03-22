import React, {Component} from "react";
import Keys from './Keys.js';
import Result from './Result.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput:"",
      result: "0"
    }
  }

  onClick = button => {
    if(button==="="){
      this.calculate()
    } else if (button==="C"){
        this.reset()
    } else {
        this.setState({
          userInput: this.state.userInput + button
        })
      }
  };

  calculate = () => {
    let checkResult = '';
    if(this.state.userInput.includes('--')) {
      checkResult = this.state.userInput.replace('--','+')
    } else {
      checkResult = this.state.userInput
    }
    try {
      this.setState({
        result: (eval(checkResult)||"") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      userInput: "",
      result: "0"
    })
  };
  render() {
          return (
              <div>
                  <div className="calculator-body">
                      <Result userInput={this.state.userInput}  result={this.state.result} />
                      <Keys onClick={this.onClick} />
                  </div>
              </div>
          );
      }


}

export default App;
