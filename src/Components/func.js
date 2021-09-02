import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getTop5Users } from "../store/users";

const FunctionalComponent = () => {
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.users.list);

  // Using Selector
  const users = useSelector(getTop5Users); // only pass reference

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default FunctionalComponent;
