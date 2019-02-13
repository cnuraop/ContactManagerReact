import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    console.log("Component Did Mount...");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  } // All Ajax calls

  // componentWillMount() {
  //   console.log("Component Will Mount...");
  // }

  // componentDidUpdate() {
  //   console.log("Component Did Update...");
  // }

  // componentWillUpdate() {
  //   console.log("Component Will Update...");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
