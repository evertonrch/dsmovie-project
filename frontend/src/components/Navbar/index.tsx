import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1 className="dsmovie-heading">DSMovie</h1>
          <a href="https://github.com/evertonrch">
            <div className="dsmovie-contact">
              <GithubIcon />
              <span>/evertonrch</span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
