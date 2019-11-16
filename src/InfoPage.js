import React, { Component } from "react";
import { Grid, Segment, Container } from "semantic-ui-react";

class InfoPage extends Component {
  handleClick = () => {
    this.props.history.push("/softwareeng");
    // console.log("page change");
  };

  render() {
    return (
      <>
        <Grid centered columns={3}>
          <Grid.Column computer={5}>
            <Segment onClick={() => this.handleClick()}>
              <Container textAlign="center">Software Engineering</Container>
            </Segment>
          </Grid.Column>
          <Grid.Column computer={5}>
            <Segment>
              <Container textAlign="center">Cybersecurity</Container>
            </Segment>
          </Grid.Column>
          <Grid.Column computer={5}>
            <Segment>
              <Container textAlign="center">Cloud Support</Container>
            </Segment>
          </Grid.Column>
        </Grid>
        {/* {console.log("rendered InfoPage")} */}
        {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
      </>
    );
  }
}

export default InfoPage;
