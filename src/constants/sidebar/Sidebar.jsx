import React, { useState } from "react";
import { connect } from "react-redux";
import brand_logo from "../images/brand_logo.png";
import NavbarLink from "./navbarLink";
import ImageAvatars from "./ImageAvatars";
import CustomizedBadges from "./cartBadge";
import "./sidebar.css";



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
