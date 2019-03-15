import React, { Component } from "react";

import "./Toolbar.css";

class Toolbar extends Component {
  state = {
    itemName: ""
  };

  inputHandler(e, value) {
    if(e.keyCode === 13) 
      this.clickHandler(e)
    this.setState({
      itemName: value
    });
  }

  clickHandler(e) {
    this.props.addButtonHandler(this.state.itemName);
    var presentState = { ...this.state };
    presentState.itemName = "";
    this.setState(presentState);
  }

  render() {
    return (
      <div className="toolbar-section">
        <input
          className="toolbar-section__input"
          type="text"
          placeholder="Click to quickly add a task"
          value={this.state.itemName}
          onChange={e => {
            this.inputHandler(e, e.target.value);
          }}
        />
        <div
          className="upArrowButton"
          onClick={event => this.clickHandler(event)}
        >
          <i
            class="fas fa-arrow-up "
            style={{
              bottom: "11px",
              right: "10px",
              color: "white",
              position: "absolute",
              color: "#a4a4a4"
            }}
            disabled={!this.state.itemName}
          />
        </div>
      </div>
    );
  }
}

export default Toolbar;
