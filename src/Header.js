import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory;
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large"></ArrowBackIosIcon>
        </IconButton>
      ) : (
        <Link to="/personal">
          <IconButton>
            <PersonIcon fontSize="large" />
          </IconButton>
        </Link>
      )}
      <Link to="/">
        <IconButton>
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
