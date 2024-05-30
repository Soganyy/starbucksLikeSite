import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Header = async () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a className="navbar-brand" href="/">
        Starbucks
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href={"/menu"}>Menu</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
