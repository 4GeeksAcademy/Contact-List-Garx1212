import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-light fw-bold">Contact List</Link>
          <Link className="btn btn-outline-success outline text-light" to={"/agenda"}>
            Add New Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;