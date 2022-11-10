import { Link } from "react-router-dom";
import Users from "./Users";

const Admin = () => {
  return (
    <section className="container">
      <div className="no-access">
        <h1>Página dos administradores</h1>
        <br />
        <Users />
        <br />
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};
