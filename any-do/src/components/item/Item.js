import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Item.css";

class item extends Component {
  state = {
    clicked: false
  };

  itemCheckedHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    let nameStyles = "item-section__content";
    if (this.state.clicked === true) {
      nameStyles += " clicked";
    }
    return (
      <div className="item-section">
        <input
          type="checkbox"
          className="item-section__check"
          onChange={this.itemCheckedHandler}
        />
        <span
          className={nameStyles}
          onClick={this.props.showAddReminder.bind(this, this.props.eachItem)}
        >
          {this.props.eachItem.name}
          &nbsp;&nbsp;
        </span>
        <div className="timeDisplay">{this.props.eachItem.reminder}</div>
        <i
          class="fas fa-trash"
          onClick={this.props.onDelete}
          style={{
            position: "absolute",
            color: "#a4a4a4",
            cursor: "pointer",
            right: "20px"
          }}
        />
      </div>
    );
  }
}

item.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func
};

export default item;
