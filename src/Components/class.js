import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/users";
// import { createStructuredSelector } from "reselect";

class ClassComponent extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    }
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

// Way 1
const mapStateToProps = (state) => ({
  users: state.users.list,
  // users: getTop5Users(state),
});

// Way 2
// const mapStateToProps = createStructuredSelector({
//   users: getTop5Users,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);
