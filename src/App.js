import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersReceived } from "./store/users";

const userData = [
  {
    id: 1,
    name: "Ankit",
  },
  {
    id: 2,
    name: "Rahul",
  },
];

function App() {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersReceived(userData));
  }, [dispatch]);

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
}

export default App;
