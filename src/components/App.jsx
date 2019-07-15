import React from 'react';
import { Router } from '@reach/router';
import { withAuthenticator } from 'aws-amplify-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  CreateRoute,
  CsvRoute,
  NotFoundRoute,
  MenuRoute,
  ViewRoute,
  ViewBracketsRoute,
  ViewUsersRoute,
} from './routes';
import ApiProvider from '../providers/InvokeApiContext';
import themeConfig from '../conf/theme';
import signUpConfig from '../conf/signUp';

const theme = createMuiTheme(themeConfig);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ApiProvider>
      <Router>
        <MenuRoute path="/" />
        <CreateRoute path="/new" />
        <CsvRoute path="/csv" />
        <ViewRoute path="/bracket/:bracketId" />
        <ViewUsersRoute path="/users" />
        <ViewBracketsRoute path="/brackets" />
        <NotFoundRoute default />
      </Router>
    </ApiProvider>
  </MuiThemeProvider>
);

export default withAuthenticator(
  App,
  {
    includeGreetings: false,
    authenticatorComponents: [],
    federated: null,
    theme: null,
    signUpConfig,
  },
);
