/* 

Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
  in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also 
  have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)
  
  0. How are you today? 😊 I am doing quite fine
  1. Please fix any obvious issues you see with the dropdown.
  2. Please then make improvements to the dropdown.
  3. Consider the different ways that this dropdown might be used and what changes would
     be neccessary to make it more flexible.
  4. If we wanted to sync this dropdown selection to the server with
     app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) where would this be included?
  5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
     what changes should be made? (just a sentence or two or some code is ok).
  
  PS: No need to worry about CSS.
Error 1: constructor was misplelt
  Error 2: Failed to compile.

src/components/dropdown.jsx
  Line 59:3:  Your render method should have a return statement  react/require-render-return

Search for the keywords to learn more about each error.

Error 3: Return Function Missing In DropdownItem 
 Error 4(Warning):  Line 57:100:  aria-expended: This attribute is an invalid ARIA attribute. Did you mean to use aria-expanded
 */

import React, { PureComponent } from 'react';

class Dropdown extends PureComponent {
  constructor(props) { //mispelt constructor
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this); // adding binding for parent class

  }
  /* 
    componentDidMount(){
      // We can wrap the connect app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) state to the componentDidMount Lifecycle

    }
   */
  toggle(e) {
    e.preventDefault();                 // prevent event's defult behavoiur
    const isClose = !this.state.isOpen;   // the toggler in it's current state wasn't working this new code does it:
    this.setState({ isOpen: isClose });//toggle function

  }

  render() {
    const { isOpen } = this.state;
    const { label } = this.props;

    return (
      <div className="dropdown">
        <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expended={isOpen} onClick={this.toggle}>{label}</button>
        {
          this.state.isOpen ?
            (<ul aria-labelledby="dropdownButton" role="menu">
              {this.props.children}
            </ul>) :
            (<></>)
        }
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
  render() {

    return (<li>Done</li>)
  }
}

class ExampleNav extends PureComponent {
  render() {
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page6">Page 6</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}

export default ExampleNav
