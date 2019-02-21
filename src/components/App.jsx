import React from 'react';
import {Router} from '@reach/router';
import {withAuthenticator} from 'aws-amplify-react';
import {CreateRoute, NotFoundRoute, MenuRoute, ViewRoute} from './routes'


const App = () => {
  return (
    <Router>
      <MenuRoute path="/"/>
      <CreateRoute path="/create-bracket"/>
      <ViewRoute path="/bracket/:bracketTitle"/>
      <NotFoundRoute default/>
    </Router>
  )
};

export default withAuthenticator(App);
