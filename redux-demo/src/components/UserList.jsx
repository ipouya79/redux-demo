import { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //   if (loading) return <p>loading...</p>;
  //   if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>UserList</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </div>
      )}
    </div>
  );
}

export default UserList;
