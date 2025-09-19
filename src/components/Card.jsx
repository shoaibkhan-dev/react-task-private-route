import { useNavigate } from "react-router-dom";

     function Card({ user }) {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm h-100 card-hover">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <button
          className="btn btn-success"
          onClick={() => navigate(`/api/${user.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;