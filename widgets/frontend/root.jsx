import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';


class Root extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const listOfTabs = [{title: "Tab1", content: "Content1"},
                          {title: "Tab2", content: "Content2"},
                          {title: "Tab3", content: "Content3"}];
    return (
      <div>
        <h1> < Clock /> </h1>
        <h1> <Tabs listOfTabs = {listOfTabs} /> </h1>
      </div>
    );
  }
}

export default Root;
