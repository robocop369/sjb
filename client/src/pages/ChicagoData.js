import React, { useEffect, useState } from "react";
import CardContainer from "../components/LatestDev/CardContainer";
import Row from "../components/LatestDev/Row";
import APILatestdev from "../utils/APILatestdev";

function ChicagoData() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  function loadUsers() {
    APILatestdev.fetchUsers()
      .then(users => {
        setUsers(users);
        setUser(users[0]);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Chicago Opendata Portal</h1>
      <p className="text-center h3">Click on the arrows to browse different data sets</p>
      <Row>
        <CardContainer
          title={user.login}
          image={user.image}
          profileUrl={user.profileUrl}s
          handleBtnClick={handleBtnClick}
        />
      </Row>
    </div>
  );
}

export default ChicagoData;
