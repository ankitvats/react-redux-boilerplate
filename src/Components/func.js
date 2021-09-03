import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getAllUsers } from "../store/users";

const FunctionalComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default FunctionalComponent;
