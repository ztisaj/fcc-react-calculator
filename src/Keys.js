import React, {Component} from 'react';

class Keys extends Component {
  render() {
    return (
        <div className="button">
          <div className = "leftSide">
            <div className="numStuff">
              <button className="singleButt" name="1" onClick={e=>this.props.onClick(e.target.name)}>1</button>
              <button className="singleButt" name="2" onClick={e=>this.props.onClick(e.target.name)}>2</button>
              <button className="singleButt" name="3" onClick={e=>this.props.onClick(e.target.name)}>3</button>
            </div>
            <div className="numStuff">
              <button className="singleButt" name="4" onClick={e=>this.props.onClick(e.target.name)}>4</button>
              <button className="singleButt" name="5" onClick={e=>this.props.onClick(e.target.name)}>5</button>
              <button className="singleButt" name="6" onClick={e=>this.props.onClick(e.target.name)}>6</button>
            </div>
            <div className="numStuff">
              <button className="singleButt" name="7" onClick={e=>this.props.onClick(e.target.name)}>7</button>
              <button className="singleButt" name="8" onClick={e=>this.props.onClick(e.target.name)}>8</button>
              <button className="singleButt" name="9" onClick={e=>this.props.onClick(e.target.name)}>9</button>
            </div>
            <div className="numStuff">
              <button className="singleButt" name="." onClick={e=>this.props.onClick(e.target.name)}>.</button>
              <button className="singleButt" name="0" onClick={e=>this.props.onClick(e.target.name)}>0</button>
              <button className="singleButt" name="C" onClick={e=>this.props.onClick(e.target.name)}>C</button>
            </div>
          </div>
          <div className="operations">
            <button className="singleO" name="+" onClick={e=>this.props.onClick(e.target.name)}>+</button>
            <button className="singleO" name="-" onClick={e=>this.props.onClick(e.target.name)}>-</button>
            <button className="singleO" name="*" onClick={e=>this.props.onClick(e.target.name)}>*</button>
            <button className="singleO" name="/" onClick={e=>this.props.onClick(e.target.name)}>/</button>
            <button className="singleO" name="=" onClick={e=>this.props.onClick(e.target.name)}>=</button>
          </div>
        </div>
    );
  }
}

export default Keys;
