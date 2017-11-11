import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      selected: 2
    };
  }

  addEvent(){
    const tabSelected = document.getElementByClass('tabs');
    // .addEventListener("click", (event) => {
    //   console.log(event.target);
    // });
      console.log(tabSelected);
  }

  selectTab(){
    this.state.selected = 3;
  }


  render() {
    return (
      <div className="tabs">
        {this.props.listOfTabs.map((el,idx) => {
          return (<p id={idx}>{ el.title }</p>);
        })}

        <h3>{this.props.listOfTabs[this.state.selected].content}</h3>
      </div>
    );
  }

}

export default Tabs;
