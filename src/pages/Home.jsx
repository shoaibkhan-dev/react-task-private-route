import { useEffect, useState } from "react";
import Card from "../components/Card";

   function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 10)));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">API List</h2>
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-6 col-lg-4" key={user.id}>
            <Card user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;