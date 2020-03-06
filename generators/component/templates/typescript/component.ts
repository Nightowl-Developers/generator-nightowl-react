import React from 'react';

interface <%= name %>Props {};

export default class <%= name %> extends React.Component<<%= name %>Props> {
  constructor() {
    // initialize your component here.
  }

  componentDidMount() {
    // do web requests here.
  }

  render() {
    return <div>
      <h1>My Component</h1>
    </div>;
  }
};