import React from 'react';
import {navigate} from "@reach/router"
import Button from '@material-ui/core/Button';
import '../styles/Menu.css';

const options = {
  createNewBracket: "createNewBracket",
  viewMyBrackets: "viewMyBrackets",
  viewUsers: "viewUsers"
};

const Menu = () => {
  const clickHandler = (e, option) => {
    e.preventDefault();
    switch (option) {
      case options.createNewBracket:
        navigate('new');
        break;
      case options.viewMyBrackets:
        navigate('brackets');
        break;
      case options.viewUsers:
        navigate('users');
        break;
      default:
        break;
    }
  };

  return (
    <div id="main-menu">
      <Button
        onClick={(e) => clickHandler(e, options.createNewBracket)}
        type="button"
        variant="contained"
        color="primary"
      >
        Create New Bracket
      </Button>
      <Button
        onClick={(e) => clickHandler(e, options.viewMyBrackets)}
        type="button"
        variant="contained"
        color="primary"
      >
        View My Brackets
      </Button>
      <Button
        onClick={(e) => clickHandler(e, options.viewUsers)}
        type="button"
        variant="contained"
        color="primary"
      >
        View Users
      </Button>
    </div>
  )
};

export default Menu;
