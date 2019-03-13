import React, { Component } from "react";
import Header from "../components/header/Header";
import NavigationBarContent from "../components/navigation-bar/NavigationBarContent";
import Dashboard from "../components/dashboard/Dashboard";

export class Layout extends Component {
  state = {
    showNavigationBar: true,
    currentCategory: "personal"
  };
  toggleNavigation = () => {
    this.setState({ showNavigationBar: !this.state.showNavigationBar });
  };

  updateCategory = category => {
    this.setState({ currentCategory: category });
  };

  render() {
    return (
      <div style={{ disply: "inline-block" }}>
        <Header toggleNavigation={this.toggleNavigation} />
        {this.state.showNavigationBar ? (
          <NavigationBarContent updateCategory={this.updateCategory} />
        ) : null}
        <Dashboard category={this.state.currentCategory} />
      </div>
    );
  }
}

export default Layout;
