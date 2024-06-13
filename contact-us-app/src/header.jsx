import logo from './assets/logo.png'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="prakerja.html">
          <img src={logo} className="navbar-brand-image img-fluid" alt="Yuli's Portofolio" />
          <span className="navbar-brand-text">
            Yuliana
            <small>Portfolio</small>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto">
            <li>
              <a className="nav-link click-scroll" href="#section_1">Dashboard</a>
            </li>
            <li>
              <a className="nav-link click-scroll" href="#section_2">About Me</a>
            </li>
            <li>
              <a className="nav-link click-scroll" href="#section_3">Work Experience</a>
            </li>
            <li>
              <a className="nav-link click-scroll" href="#section_4">Project</a>
            </li>
            <li>
              <a className="nav-link click-scroll" href="#footer">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;