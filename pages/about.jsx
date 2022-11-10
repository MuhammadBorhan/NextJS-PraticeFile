import React, { useEffect, useState } from "react";

const about = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return <div>This is about page : {users.name}</div>;
};

export default about;
