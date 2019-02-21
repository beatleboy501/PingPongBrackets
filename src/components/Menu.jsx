import React from 'react';
import {navigate} from "@reach/router"
import '../styles/Menu.css';
import {Auth} from 'aws-amplify';
import Button from '@material-ui/core/Button';

const Menu = () => {
  const options = {createNewBracket: "createNewBracket", viewMyBrackets: "viewMyBrackets"};

  const clickHandler = (e, option) => {
    e.preventDefault();
    option === options.createNewBracket ? navigate('create-bracket') : navigate('my-brackets');
  };

  const signOut = async () => {
    await Auth.signOut()
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
