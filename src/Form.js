import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Input, Grid, Segment, Container, Button, Card } from "semantic-ui-react";

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
      <Container style={{marginTop: '20px'}}>
        <Card fluid>
          <Card.Content>
            <Card.Header><h2>Set your schedule</h2></Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column computer={2}>
                  <h3>Monday</h3>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="Start"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="End"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Button color="secondary" content="All weekdays" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={2}>
                  <h3>Tuesday</h3>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="Start"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="End"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={2}>
                  <h3>Wednesday</h3>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="Start"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="End"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={2}>
                  <h3>Thursday</h3>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="Start"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="End"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={2}>
                  <h3>Friday</h3>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="Start"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="End"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={2}>
                  <h3>Saturday</h3>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="Start"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="End"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={2}>
                  <h3>Sunday</h3>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="Start"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
                <Grid.Column computer={3}>
                  <Dropdown
                    placeholder="End"
                    search
                    selection
                    options={this.getAllHours()}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Button color="primary" content="Search for Info Session" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default Form;