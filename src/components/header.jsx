import logo from "../assets/LogoEspaceDetente.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Espace Détente Reims" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav--menu">
          <li>
            <Link
              to="/"
              className="header__nav--link"
              style={{
                textDecoration: props.accueil,
                borderBottom: props.border,
              }}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="header__nav--link"
              style={{
                textDecoration: props.accueil,
                borderBottom: props.border,
              }}
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <Link
              to="/news"
              className="header__nav--link"
              style={{
                textDecoration: props.accueil,
                borderBottom: props.border,
              }}
            >
              News
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
