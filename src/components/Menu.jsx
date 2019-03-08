import React from 'react';
import {navigate} from "@reach/router"
import '../styles/Menu.css';
import {Auth} from 'aws-amplify';
import Button from '@material-ui/core/Button';

const Menu = () => {
  const options = {
    createNewBracket: "createNewBracket",
    viewMyBrackets: "viewMyBrackets",
    viewUsers: "viewUsers"
  };

  const clickHandler = (e, option) => {
    e.preventDefault();
    switch (option) {
      case options.createNewBracket:
        navigate('create-bracket');
        break;
      case options.viewMyBrackets:
        navigate('my-brackets');
        break;
      case options.viewUsers:
        navigate('users');
        break;
      default:
        break;
    }
  };

  const signOut = async () => {
    await Auth.signOut();
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
      <Button
        onClick={signOut}
        type="button"
        variant="contained"
        color="secondary"
      >
        Sign Out
      </Button>
    </div>
  )
};

export default Menu;
