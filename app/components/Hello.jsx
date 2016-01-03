import React from 'react';

export default class Hello extends React.Component {
  render() {
    let props = this.props;
    return (
      <div>
        <h1>
          Hello World, i'm React
        </h1>
        <h3>
          Wellcome {props.name} ({props.age} years old)
        </h3>
      </div>
    );
  }
}
