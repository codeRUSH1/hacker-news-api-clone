import React from "react";
import { Navbar,  } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ showLoader }) => {
  return (
    <Navbar style={{ backgroundColor: " #000000", position: "fixed", width: "100%" }}>
      <Navbar.Brand href="/" style={{ color: "#ffffff" }}>
        <Link
          to="/"
          style={{ color: "#ffffff", textDecoration: "none" }}
          onClick={showLoader}
        >
          <span className="logo">Y</span> Hacker News
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
