import React, { Component } from "react";
import "./NavigationBarContent.css";

export class NavigationBarContent extends Component {
  render() {
    return (
      <div className="SideMenu">
        <div className="NavigationSideBar">
          <a className="SideBarLinked" href="/">
            <i
              class="far fa-check-circle"
              style={{ marginRight: "20px", color: "grey" }}
            />
            MY LISTS
          </a>
          <i
            class="fas fa-pen"
            style={{ marginRight: "15px", float: "right" }}
            id="EditButton"
          />
        </div>
        <div className="CategoryList">
          <ul className="NavigationBarMenu" style={{ listStyle: "none" }}>
            <li onClick={event => this.props.updateCategory("personal")}>
              All Tasks
            </li>
            <li onClick={event => this.props.updateCategory("personal")}>
              Personal
            </li>
            <li onClick={event => this.props.updateCategory("work")}>Work</li>
            <li onClick={event => this.props.updateCategory("groceryList")}>
              Grocery
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationBarContent;
