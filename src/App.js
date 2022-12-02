import { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, changeUsername } from './actions';

class App extends Component {
  handleUser = (e) => {
    this.props.changeUsername(e.target.value);
  };

  addUser = () => {
    console.log('addUser:', this.props.username);
    this.props.addUser();
  }

  render() {
    console.log('usersWithFoo:', this.props.usersWithFoo);
    return (
      <div>
        <input type="text" value={this.props.username} onChange={this.handleUser} />
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
  const usersWithFoo = state.users.users.filter((user) => {
    user.includes(ownProps.searchText)
  });
  return {
    users: state.users.users,
    username: state.users.username,
    usersWithFoo,
  };
};

const mapDispatchToProps = {
  addUser,
  changeUsername,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
