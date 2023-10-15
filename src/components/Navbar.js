import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }
  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'adminpassword') {
      setLoggedIn(true);
      alert ("Admin Login Sucessfull")
    } else {
      setLoggedIn(false);
      alert('Invalid Credentials');
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" ,
            fontFamily:"monospace"}}
            >
              Softech
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"

              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
            {!loggedIn && (<li><button className="admin-btn" style={{ cursor: "pointer" ,
            backgroundColor: "#3498db", 
            color: "#fff", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "5px", 
          }} onClick={() => setShowPopup(true)}>
            Admin Log in
          </button></li>)}
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
      {showPopup && !loggedIn && (
        <div class="modal-bg">
        <div className=" modal-container ">
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
