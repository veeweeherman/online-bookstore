var return2ways = function(array){
  var first = ''
  var buffer = 'BUFFER'
  var second = ''
  for (var i = 0; i < array.length; i++) {
    first += array[i];
    second += array[i]+5;
  }
  var output = first + '\n' + buffer + '\n' + second
  return output;


}
//  -->
// 12345
// BUFFER
// 678910
console.log(return2ways([1,2,3,4,5]));
//////////////////////////////////

var FormComp = React.createClass({

  // To get rid of those input refs I'm moving those values
  // and the form message into the state
  getInitialState: function() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },

  handleSubmit: function(e) {

    e.preventDefault();

    var userName = this.state.name.trim();
    var userEmail = this.state.email.trim();

    if(!userName || !userEmail) return;

    this.setState({
      name: '',
      email: '',
      message: 'Please wait...'
    });

    // I'm adding a callback to the form submit handler, so you can
    // keep all the state changes in the component.
    this.props.onFormSubmit({
      userName: userName,
      userEmail: userEmail,
      url: "/api/submit"
    }, function(data) {
      this.setState({ message: data });
    });
  },

  changeName: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  changeEmail: function(e) {
    this.setState({
      email: e.target.value
    });
  },

  render: function() {
    // the message and the input values are all component state now
    return (
      <div>
        <div className="result">{ this.state.message }</div>
        <form className="formElem" onSubmit={ this.handleSubmit }>
          Name: <input type="text" className="userName" name="userName" value={ this.state.name } onChange={ this.changeName } /><br/>

          Email: <input type="text" className="userEmail" name="userEmail" value={ this.state.email } onChange={ this.changeEmail } /><br/>
          <input type="submit" value="Submit" />
        </form >
      </div>
    );
  }
});


var RC= React.createClass({

  onFormSubmit: function(data, callback){

     $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: data,
        success: callback,
        error: function(xhr, status, err) {

          console.error(this.props.url, status, err.toString());

        }.bind(this)
      });
  },

  render: function() {
    return <FormComp onFormSubmit={this.onFormSubmit} />
  }
});

React.render(
  <RC/>,
  document.getElementById('content')
);
//////////////////////////////////////////////////
var TodoApp = React.createClass({
  getInitialState: function(){
    return {items: []};
  },
  updateItems: function(newItem){
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  },
  render: function(){
    return (
      <div>
        <TodoBanner/>
        <TodoList items={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
});

var TodoBanner = React.createClass({
  render: function(){
    return ( <h3>TODO</h3> );
  }
});

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return ( <TodoListItem>{itemText}</TodoListItem> );
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoListItem = React.createClass({
  render: function(){
    return ( <li>{this.props.children}</li> );
  }
});

var TodoForm = React.createClass({
  getInitialState: function() {
    return {item: ''};
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
    ReactDOM.findDOMNode(this.refs.item).focus();
    return;
  },
  onChange: function(e){
    this.setState({ item: e.target.value });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input type='text' ref='item' onChange={this.onChange} value={this.state.item}/> <input type='submit' value='Add'/>

      </form>
    );
  }
});


ReactDOM.render(<TodoApp/>, document.getElementById('app'));
