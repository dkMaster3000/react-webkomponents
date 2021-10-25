import React from "react";
import ReactWebComponent from "react-web-component";

class MyComponent extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

class AnotherComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

ReactWebComponent.create(<MyComponent />, "my-component");
//ReactWebComponent.create(<AnotherComponent name="Mars" />, 'another-component');
