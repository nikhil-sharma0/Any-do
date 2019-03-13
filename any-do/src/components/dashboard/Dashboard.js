import React, { Component } from "react";
import ItemsList from "../items-list/ItemsList";
import "./Dashboard.css";
import Reminder from "../reminder/Reminder";
import noTask from "./no-task.png";

export class Dashboard extends Component {
  state = {
    showModal: false,
    idIndicator: 1,
    currentTask: "",
    currentCategory: "",
    dateTime: null,
    allTasks: {
      personal: {
        today: [],
        tomorrow: [],
        someday: [],
        upcoming: []
      },
      work: {
        today: [],
        tomorrow: [],
        someday: [],
        upcoming: []
      },
      groceryList: {
        today: [],
        tomorrow: [],
        someday: [],
        upcoming: []
      }
    }
  };

  addTaskToState = value => {
    let category = this.props.category;
    let updateList = { ...this.state.allTasks[category] };
    updateList["today"].push({
      id: this.state.idIndicator,
      name: value,
      category: category,
      completed: false,
      reminder: null
    });
    if (category === "personal") {
      this.setState({
        personal: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "work") {
      this.setState({
        work: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "groceryList") {
      this.setState({
        groceryList: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    }
  };

  onDeleteHandler = id => {
    let category = this.props.category;
    let updateList = { ...this.state.allTasks[category] };
    let index = -1;
    let indexReq = null;
    updateList["today"].forEach(eachTask => {
      index++;
      if (eachTask.id === id) {
        indexReq = index;
      }
    });

    updateList["today"].splice(indexReq, 1);

    if (category === "personal") {
      this.setState({
        personal: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "work") {
      this.setState({
        work: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    } else if (category === "groceryList") {
      this.setState({
        groceryList: updateList,
        idIndicator: this.state.idIndicator + 1
      });
    }
  };

  setReminder = dateTime => {
    let id = this.state.currentTask.id;
    let category = this.props.category;
    let updateList = { ...this.state.allTasks[category] };
    let index = -1;
    let indexReq = null;
    updateList["today"].forEach(eachTask => {
      index++;
      if (eachTask.id === id) {
        indexReq = index;
      }
    });
    updateList["today"][indexReq].reminder =
      dateTime.toString().split(" ")[0] +
      ", " +
      dateTime.toString().split(" ")[4];

    if (category === "personal") {
      this.setState({
        personal: updateList
      });
    } else if (category === "work") {
      this.setState({
        work: updateList
      });
    } else if (category === "groceryList") {
      this.setState({
        groceryList: updateList
      });
    }
  };

  showAddReminder = eachItem => {
    this.setState({ currentTask: eachItem });
  };

  render() {
    let stateAsProps = { ...this.state.allTasks[this.props.category] };
    return (
      <div className="DashboardContent">
        <ItemsList
          addButtonHandler={this.addTaskToState}
          currentState={stateAsProps}
          onDeleteHandler={this.onDeleteHandler}
          showAddReminder={this.showAddReminder}
        />
        {this.state.currentTask ? (
          <Reminder
            setReminder={this.setReminder}
            eachItem={this.state.currentTask}
          />
        ) : (
          <img src={noTask} alt="Logo" id="noTaskImage" />
        )}
      </div>
    );
  }
}

export default Dashboard;
