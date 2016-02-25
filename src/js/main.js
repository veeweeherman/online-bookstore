'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');
var Welcome = require('./welcome.js');
var Books = require('./books.js');
var Form = require('./form.js');

/***************************************************************
Top level parent component that holds entire contents
***************************************************************/

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Books.GetAllBooks />
      </div>
    );
  }
});



ReactDOM.render(<App />, document.getElementById('app'));
