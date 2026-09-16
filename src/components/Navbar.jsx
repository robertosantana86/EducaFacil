import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">EducaFácil</span>

        <div>
         <Link className="nav-link d-inline me-3 text-white" to="/">
  Início
</Link>

<Link className="nav-link d-inline text-white" to="/sobre">
  ODS 4
</Link>
        </div>
      </div>
    </nav>
  );
}