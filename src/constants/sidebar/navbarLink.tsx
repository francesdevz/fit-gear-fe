import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

interface NavbarLinkProps {
  navbarName: string; 
  to: string;        
}

/**
 * A reusable navigation link component for the sidebar or any other section of the app.
 * It renders a link with a specified name and route.
 * 
 * @param {NavbarLinkProps} props - The properties passed to the component.
 * @param {string} props.navbarName - The name displayed for the navigation link.
 * @param {string} props.to - The destination route for the link.
 * 
 * @returns {JSX.Element} The rendered navigation link.
 */
const NavbarLink: React.FC<NavbarLinkProps> = ({ navbarName, to }) => {
  return (
    <Link to={to} className="navbar-link">
      <h4>{navbarName}</h4>
    </Link>
  );
};

export default NavbarLink;