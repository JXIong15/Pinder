import React from "react";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import "./style.css";


function CardBtn() {
  return (
    <div className="cardButton">
      <IconButton className="iconButton">
        <ReplayIcon fontSize="large" className="replay_icon" />
      </IconButton>
      <IconButton className="iconButton">
        <CloseIcon fontSize="large" className="close_icon" />
      </IconButton>
      <IconButton className="iconButton">
        <StarRateIcon fontSize="large" className="start_icon" />
      </IconButton>
      <IconButton className="iconButton">
        <FavoriteIcon fontSize="large" className="favorite_icon" />
      </IconButton>
      <IconButton className="iconButton">
        <FlashOnIcon fontSize="large" className="flash_icon" />
      </IconButton>
    </div>
  );
}

export default CardBtn;