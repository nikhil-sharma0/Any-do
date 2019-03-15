import React, { Component } from "react";
import Item from "../item/Item";
import Toolbar from "../toolbar/Toolbar";

import "./ItemsList.css";

class ItemList extends Component {
  render() {
    const itemsList = Object.keys(this.props.currentState).map(list => {
      return this.props.currentState[list].map(eachItem => {
        return (
          <Item
            key={eachItem.id}
            eachItem={eachItem}
            onDelete={() => {
              this.props.onDeleteHandler(eachItem.id);
            }}
            showAddReminder={this.props.showAddReminder}
            hideAddReminder={this.hideAddReminder}
          />
        );
      });
    });

    return (
      <div className="items-section">
        <div className="TaskDay">
          <h2>Today</h2>
        </div>
        {itemsList}
        <div className="TaskDay">
          <h2>Tomorrow</h2>
        </div>
        <div className="TaskDay">
          <h2>Upcoming</h2>
        </div>
        <div className="TaskDay">
          <h2>Someday</h2>
        </div>
        <div>
          <Toolbar
            // onAddHandler={this.addItemHandler}
            addButtonHandler={this.props.addButtonHandler}
          />
        </div>
      </div>
    );
  }
}

export default ItemList;
