import React from "react";
import { connect } from "react-redux";
import brand_logo from "../images/brand_logo.png";
import NavbarLink from "./navbarLink";
import ImageAvatars from "./ImageAvatars";
import CustomizedBadges from "./cartBadge";
import "./sidebar.css";

/**
 * A sidebar component that displays the brand logo, navigation links, user avatar, 
 * and cart badge in the sidebar of the application.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.userName - The username of the logged-in user (optional).
 * @param {string} props.userAvatar - The avatar URL or path of the logged-in user (optional).
 * 
 * @returns {JSX.Element} The rendered sidebar component with brand logo, 
 *                        navigation links, and user-related information.
 */
const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="image-container">
          <img src={brand_logo} alt="Brand Logo" className="image-class" />
          <p style={{fontSize: '40px'}}>FitGear</p>
        </div>
        <div className="static-nav-container">
          <NavbarLink navbarName="Home" to="/" />
          <NavbarLink navbarName="Shop" to="/" />
          <NavbarLink navbarName="About" to="/" />
          <NavbarLink navbarName="Contact" to="/" />
          <div className="avatar-badge-container">
            <ImageAvatars userName={props?.userName} userAvatar={props?.userAvatar}/>
            <NavbarLink navbarName="Log In" to="/login" />
            <CustomizedBadges/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({});
const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(Sidebar);
