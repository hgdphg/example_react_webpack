import React from 'react';

export default class Hello extends React.Component {
  render() {
    let props = this.props;
    return (
      <h1>Hello World, i'm React. Wellcome {props.name} ({props.age} years old) </h1>
      )
  }
}
