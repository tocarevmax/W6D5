import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
// import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />,root);
});



// listOfTabs=[{title: "Tab1", content: "Content1"},
//                       {title: "Tab2", content: "Content2"},
//                       {title: "Tab3", content: "Content3"}]
