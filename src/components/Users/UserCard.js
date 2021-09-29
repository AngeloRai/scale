import React from "react";

function UserCard({ user }) {
  return (
    <div className="col-12 col-md-4 my-3 text-center ">
      {user && (
        <div className="p-3 border user-card shadow">
          <img src={user.avatar} alt="" />
          <div className="text-secondary h4">
            {user.first_name}&nbsp;{user.last_name}
          </div>
          <div className="h6">{user.email}</div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
