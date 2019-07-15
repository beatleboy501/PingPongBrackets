import React, { Fragment } from 'react';
import Bracket from './Bracket/index';
import CreateBracket from './CreateBracket/index';
import Menu from './Menu/index';
import Navigation from './Navigation/index';
import ViewUsers from './ViewUsers/index';
import ViewBrackets from './ViewBrackets/index';
import BulkCsvUploads from './BulkCsvUploads/index';

const withNavigation = (pageTitle, component) => (
  <Fragment>
    <Navigation pageTitle={pageTitle} />
    {component}
  </Fragment>
);

const ViewRoute = bracketProps => withNavigation('Bracket', <Bracket {...bracketProps} />);

const CreateRoute = () => withNavigation('Create Bracket', <CreateBracket />);

const MenuRoute = () => withNavigation('Main Menu', <Menu />);

const NotFoundRoute = () => <div>Sorry, nothing here.</div>;

const ViewUsersRoute = () => withNavigation('Users', <ViewUsers />);

const ViewBracketsRoute = () => withNavigation('Brackets', <ViewBrackets />);

const CsvRoute = () => withNavigation('Bulk CSV Uploads', <BulkCsvUploads />);

export {
  ViewRoute,
  CreateRoute,
  CsvRoute,
  MenuRoute,
  NotFoundRoute,
  ViewBracketsRoute,
  ViewUsersRoute,
};
