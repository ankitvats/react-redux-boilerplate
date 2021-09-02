import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/users";

class ClassComponent extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <ul>
        {this.props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);
