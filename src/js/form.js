'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');
var Welcome = require('./welcome.js');
var Books = require('./books.js');

/***************************************************************
Form that is toggled by actions in the Welcome component (see welcome.js).
Methods from the Book component are passed to this child component
in order to be able to add new data
***************************************************************/

module.exports = {};


module.exports.EnterNewBookForm = React.createClass({
  getInitialState: function() {
    return {title: '', author: '', displayForm: false};
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.title, this.state.author);
    this.setState({title: '', author: ''});
    var title = ReactDOM.findDOMNode(this.refs.title).focus();
    var author = ReactDOM.findDOMNode(this.refs.author).focus();
    return;
  },
  onTitleChange: function(e){
    this.setState({ title: e.target.value });
  },
  onAuthorChange: function(e){
    this.setState({ author: e.target.value });
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='title' onChange={this.onTitleChange} value={this.state.title}/>
          <input type='text' ref='author' onChange={this.onAuthorChange} value={this.state.author}/>
          <input type='submit' value='Add new book'/>
        </form>
      </div>
    )
  }
})
