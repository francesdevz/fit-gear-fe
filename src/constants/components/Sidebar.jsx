import React from "react";
import { connect } from "react-redux";
import WebsiteLogoSvg from "./WebsiteLogoSvg";
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
          <WebsiteLogoSvg/>
          <p style={{fontSize: '40px'}}>FitGear</p>
        </div>
        <div className="static-nav-container">
          <NavbarLink navbarName="Home" to="/" />
          <NavbarLink navbarName="Shop" to="/shop" />
          <NavbarLink navbarName="About" to="/about" />
          <NavbarLink navbarName="Contact" to="/contact" />
          <div className="avatar-badge-container">
            <ImageAvatars userName={props?.details?.name} userAvatar={props?.userAvatar}/>
            <NavbarLink 
              navbarName={`${props?.details?.name ? props.details.name : 'Log In'}`} 
              to={`${props?.details?.name ? "" : '/login'}`} 
            />
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
