import React, { Component } from "react";
import "./Reminder.css";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";
import "date-fns";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
}

export class Reminder extends Component {
  state = {
    open: false,
    selectedDate: new Date("2019-03-12T00:00:00")
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  save = () => {
    this.props.setReminder(this.state.selectedDate);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <div className="showReminder">
        <h2>{this.props.eachItem.name}</h2>
        <div
          className="addReminder"
          style={{ marginLeft: "24px" }}
          onClick={this.handleOpen}
        >
          <i class="far fa-clock" style={{ paddingTop: "20px" }} />
          <p>Add Reminder</p>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h4>Add date and time for completion</h4>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container className={classes.grid} justify="space-around">
                <DatePicker
                  margin="normal"
                  label="Date picker"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                />
                <TimePicker
                  margin="normal"
                  label="Time picker"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                />
              </Grid>
              <Button
                onClick={this.save}
                color="primary"
                className={classes.button}
              >
                Save
              </Button>
              <Button onClick={this.handleClose} className={classes.button}>
                Cancel
              </Button>
            </MuiPickersUtilsProvider>
          </div>
        </Modal>
        <div className="addReminder">
          <i class="far fa-user" style={{ paddingTop: "20px" }} />
          <p>Share Task</p>
        </div>
        <div className="addReminder">
          <i class="far fa-file-alt" style={{ paddingTop: "20px" }} />
          <p>Personal</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Reminder);
