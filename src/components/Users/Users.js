import axios from "axios";
import React, { useState, useEffect } from "react";
import Paginate from "../Paginate";
import UserCard from "./UserCard";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(1);

  // fetch users from api
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await axios("https://reqres.in/api/users");
      
      //duplicate number of users to have enough items to paginate
      setUsers([...fetchedUsers.data.data, ...fetchedUsers.data.data].sort((a, b) => a.id - b.id));
      setUsersPerPage(fetchedUsers.data.per_page);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  //set current page for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="container row">
        {users && (
          <Paginate
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentUsers.map((user, index) => <UserCard user={user} key={index}/>)
          )}
        </div>
        {users && (
          <Paginate
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default Users;
