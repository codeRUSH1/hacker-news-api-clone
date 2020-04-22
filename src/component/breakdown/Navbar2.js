import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//NavBar2 is not being utilised just yet in v1, laid down the groundworks. 


const Navbar2 = ({ showLoader }) => {
  return (
    <Navbar style={{ background: "#e8e8e8", visibility:"hidden" }}>
      <Nav className="mr-auto navbar2">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <span>News</span>
          </Dropdown.Toggle>

          <Dropdown.Menu style={dropDownMenuStyle}>
            <Dropdown.Item onClick={showLoader}>
              <Link to="/top" style={{ textDecoration: "none", color: "#000" }}>
                <div>Top</div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={showLoader}>
              <Link to="/new" style={{ textDecoration: "none", color: "#000" }}>
                <div> New</div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={showLoader}>
              <Link
                to="/best"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div>Best</div>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

const dropDownMenuStyle = {
  boxShadow: " 0px 2px 15px -7px rgba(0, 0, 0, 0.75)"
};

export default Navbar2;
