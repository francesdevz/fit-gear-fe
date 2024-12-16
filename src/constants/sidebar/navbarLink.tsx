import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

interface NavbarLinkProps {
  navbarName: string; 
  to: string;        
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ navbarName, to }) => {
  return (
    <Link to={to} className="navbar-link">
      <h4>{navbarName}</h4>
    </Link>
  );
};

export default NavbarLink;
