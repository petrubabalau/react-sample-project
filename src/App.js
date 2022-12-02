import { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './actions';

class App extends Component {
  state = {
    username: '',
  }

  handleUser = (e) => {
    this.setState({username: e.target.value})
  };

  addUser = () => {
    console.log('addUser:', this.state.username)
    this.props.addUser(this.state.username)
  }

  render() {
    console.log('usersWithFoo:', this.props.usersWithFoo)
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.handleUser} />
        <button onClick={this.addUser}>Add user</button>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps:", state);
  const usersWithFoo = state.filter((user) => user.includes(ownProps.searchText));
  return {
    users: state,
    usersWithFoo,
  };
};

const mapDispatchToProps = {
  addUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
