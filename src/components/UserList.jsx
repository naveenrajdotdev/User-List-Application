import React from "react";
import { useUsers } from "../context/UserContext";
import UserCard from "./UserCard";

const UserList = () => {
  const { users, loading } = useUsers();

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <div className="grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;