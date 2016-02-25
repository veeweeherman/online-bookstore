'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');
var Books = require('./books.js');
var Form = require('./form.js');
var Main = require('./main.js');

/***************************************************************
Welcome message to user, with
ability to toggle the form (see form.js file)
needed to enter new books or close out
this component. State properties are passed from this
component to the form in order to access display methods
***************************************************************/


module.exports.Welcome = React.createClass({
  getInitialState: function(){
    return {displayForm: false, displayWelcome: true}
  },
  handleClick: function(event){
    this.setState({displayForm: !this.state.displayForm})
  },
  handleNoClick: function(event){
    this.setState({displayWelcome: !this.state.displayWelcome})

  },
  render: function(){
    if (this.state.displayWelcome){

      return (
        <div>
          <WelcomeText
          displayForm={this.state.displayForm}
          displayWelcome={this.state.displayWelcome}
          handleClick={this.handleClick}
          handleNoClick={this.handleNoClick}
          updateItems={this.props.updateItems}/>
        </div>
      );

    }
    if (!this.state.displayWelcome){
      return <div><NoHasBeenClicked /></div>;
    }
  }
});

var WelcomeText = React.createClass({
  render: function(){
    var form = this.props.displayForm ? <Form.EnterNewBookForm onFormSubmit={this.props.updateItems}/> : null;
      if (this.props.displayWelcome){
        return (
          <div className="welcome">
            Welcome, back! <br />
            Its been a while. <br />
            Read any good books lately? <br />
            <button onClick={this.props.handleNoClick}>No</button>
            <button onClick={this.props.handleClick}>Yes</button>
            <div>{form}</div>
          </div>
        );
      } else {
        return <NoHasBeenClicked />;
      }
  }
})

var NoHasBeenClicked = React.createClass({
  render: function(){
    return <div></div>;
  }
})
