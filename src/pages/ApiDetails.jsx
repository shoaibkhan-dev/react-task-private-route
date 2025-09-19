import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

   function ApiDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <h3>{user.name}</h3>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company.name}</p>
      <p><b>City:</b> {user.address.city}</p>
    </div>
  );
}

export default ApiDetails;