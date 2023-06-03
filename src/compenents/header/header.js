import "./header.css";
import logo from "../../images/logo.gif";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} width={200} />
      </div>
      <div className="links">
        <a href="">HOME</a>
        <a href="">PROJECTS</a>
        <a href="">ABOUT</a>
      </div>
    </nav>
  );
}

export default Navbar;
