import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/registration" style={{margin: "30px"}}>
        Registration
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Navbar