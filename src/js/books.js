'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');
var Welcome = require('./welcome.js');
var Form = require('./form.js');



module.exports = {};
/***************************************************************
All Book and Magazine components:
controls data handling
***************************************************************/


module.exports.GetAllBooks = React.createClass({
  getInitialState: function(){
    return {
        data: [],
        show: true
    };
  },
  componentDidMount: function(){
    $.getJSON( "../books/books.json", function(data) {
        this.setState({
          data: data
        });
    }.bind(this));
  },
  updateItems: function(title, author){
    for (var i = 0; i < this.state.data.length; i++) {
      if (title.toLowerCase() === this.state.data[i].title.toLowerCase()){
        alert(title + ' is already in your collection! Please enter a different book.');
        return;
      }
    }
    var allItems = this.state.data.concat({title: title, author: author});
    this.setState({data: allItems});
  },
  handleClick: function() {
      this.setState({ show: !this.state.show });
  },
  render: function(){
    var titles = this.state.data.map(function(book, i){
      return (
        <span>
          <GetBookTitles className="titles" key={i} title={book.title}></GetBookTitles>
        </span>
      );
    });

    var info = this.state.data.map(function(book, i){
      // if type = book, then use GetBookInfo comp; if type=magazine, use GetMagazineInfo component 
      return (
        <div>
          <GetBookInfo key={i} title={book.title} author={book.author} image={book.image}></GetBookInfo>
        </div>
      );
    });

    return (
      <div>
        {titles}
        <Welcome.Welcome updateItems={this.updateItems} />
        <div className="columns">{info}</div>
      </div>
    );
  }
});

var GetBookInfo = React.createClass({
  render: function(){
    return (
      <div className="bookInfo">
        <p>{this.props.title}</p> <br />
        <p>By {this.props.author}</p> <br />
        <img width="200" src={this.props.image} /> <br />
        <a href="">Free sample</a>
        <a href="">Review</a>
      </div>
    );
  }
})

var GetMagazineInfo = React.createClass({
  render: function(){
    return (
      <div className="magazineInfo">
      <img width="200" src={this.props.image} /> <br />
        <p>{this.props.title}</p> <br />
        <p>By {this.props.publisher}</p> <br />
        <p>By {this.props.description}</p> <br />
        <a href="">Share</a>
        <a href="">Explore</a>
      </div>
    );
  }
})

var GetBookTitles = React.createClass({
  render: function(){
    return (
      <span className="titles">
        <a href="http://www.google.com">{this.props.title}</a>
      </span>
    );
  }
})
