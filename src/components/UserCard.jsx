import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <span>{user.company.name}</span>
    </div>
  );
};

export default UserCard;