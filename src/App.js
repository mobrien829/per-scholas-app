import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Grid, Segment, Container } from "semantic-ui-react";

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAllHours() {
    let hours = [...Array(12).keys()].map(hour => {
      return {
        text: `${hour + 1}am`,
        value: `${hour + 1}am`,
        key: `${hour + 1}am`
      };
    });

    hours = hours.concat(
      [...Array(12).keys()].map(hour => {
        return {
          text: `${hour + 1}pm`,
          value: `${hour + 1}pm`,
          key: `${hour + 1}pm`
        };
      })
    );
    console.log(hours);
    return hours;
  }

  render() {
    return (
      // <div>
      // <Input placeholder='Date'
      // type="date"
      // min="2019-11-01"
      // max="2050-01-01"
      // />
      // <Dropdown
      //   placeholder="Start"
      //   search
      //   selection
      //   options={this.getAllHours()}
      // />
      // <Dropdown
      //   placeholder="End"
      //   search
      //   selection
      //   options={this.getAllHours()}
      // />
      // </div>
      <Grid centered columns={7}>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          Sunday
          <Input placeholder='Date'
        type="date"
        min="2019-11-01"
        max="2050-01-01"
        />
        <Dropdown
          placeholder="Start"
          search
          selection
          options={this.getAllHours()}
        />
        <Dropdown
          placeholder="End"
          search
          selection
          options={this.getAllHours()}
        />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          Monday
          <Input placeholder='Date'
        type="date"
        min="2019-11-01"
        max="2050-01-01"
        />
        <Dropdown
          placeholder="Start"
          search
          selection
          options={this.getAllHours()}
        />
        <Dropdown
          placeholder="End"
          search
          selection
          options={this.getAllHours()}
        />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          Tuesday
          <Input placeholder='Date'
        type="date"
        min="2019-11-01"
        max="2050-01-01"
        />
        <Dropdown
          placeholder="Start"
          search
          selection
          options={this.getAllHours()}
        />
        <Dropdown
          placeholder="End"
          search
          selection
          options={this.getAllHours()}
        />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          Wednesday
          <Input placeholder='Date'
        type="date"
        min="2019-11-01"
        max="2050-01-01"
        />
        <Dropdown
          placeholder="Start"
          search
          selection
          options={this.getAllHours()}
        />
        <Dropdown
          placeholder="End"
          search
          selection
          options={this.getAllHours()}
        />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          Thursday
          <Input placeholder='Date'
        type="date"
        min="2019-11-01"
        max="2050-01-01"
        />
        <Dropdown
          placeholder="Start"
          search
          selection
          options={this.getAllHours()}
        />
        <Dropdown
          placeholder="End"
          search
          selection
          options={this.getAllHours()}
        />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          Friday
          <Input placeholder='Date'
        type="date"
        min="2019-11-01"
        max="2050-01-01"
        />
        <Dropdown
          placeholder="Start"
          search
          selection
          options={this.getAllHours()}
        />
        <Dropdown
          placeholder="End"
          search
          selection
          options={this.getAllHours()}
        />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={2}>
          Saturday
          <Input placeholder='Date'
        type="date"
        min="2019-11-01"
        max="2050-01-01"
        />
        <Dropdown
          placeholder="Start"
          search
          selection
          options={this.getAllHours()}
        />
        <Dropdown
          placeholder="End"
          search
          selection
          options={this.getAllHours()}
        />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Form;
