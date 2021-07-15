import React from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';
import ForumIcon from '@material-ui/icons/Forum';
import "./style.css";


function CardHeading() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="person_icon" />
      </IconButton>
      <IconButton>
        <PetsIcon fontSize="large" className="paw_icon" />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="forum_icon" />
      </IconButton>
    </div>
  );
}

export default CardHeading;