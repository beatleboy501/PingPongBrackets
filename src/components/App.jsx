import React from 'react';
import {Router} from '@reach/router';
import {withAuthenticator} from 'aws-amplify-react';
import {CreateRoute, NotFoundRoute, MenuRoute, ViewRoute, ViewUsersRoute} from './routes';
import ApiProvider from '../providers/InvokeApiContext';

const App = (props) => {
  return (
    <ApiProvider>
      <Router>
        <MenuRoute path="/" />
        <CreateRoute path="/create-bracket"/>
        <ViewRoute path="/bracket/:bracketId"/>
        <ViewUsersRoute path="/users" />
        <NotFoundRoute default/>
      </Router>
    </ApiProvider>
  )
};

const config = {
  header: 'Welcome!',
  defaultCountryCode: '1',
  hideDefaults: true,
  hiddenDefaults: ['phone_number'],
  signUpFields: [
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'email',
    },
    {
      label: 'First Name',
      key: 'given_name',
      required: true,
      displayOrder: 4,
      type: 'string',
    },
    {
      label: 'Second Name',
      key: 'family_name',
      required: true,
      displayOrder: 5,
      type: 'string',
    },
  ]
}

export default withAuthenticator(App, { includeGreetings: false, authenticatorComponents: [], federated: null, theme: null, signUpConfig: config });
