import React, { Component } from "react";

class InfoPage extends Component {
  handleClick = () => {
    this.props.history.push("/softwareeng");
    console.log("page change");
  };

  render() {
    return (
      <div>
        {console.log("rendered InfoPage")}
        <button onClick={() => this.handleClick()}>Click Me</button>
      </div>
    );
  }
}

export default InfoPage;
