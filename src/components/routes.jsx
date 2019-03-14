import Bracket from "./Bracket";
import CreateBracket from "./CreateBracket";
import Menu from "./Menu";
import React from "react";
import Navigation from "./Navigation";
import ViewUsers from './ViewUsers';

const withNavigation = (pageTitle, component) => {
  return (
    <React.Fragment>
      <Navigation pageTitle={pageTitle} />
      {component}
    </React.Fragment>
  )
};

const ViewRoute = (bracketProps) => withNavigation('Bracket', <Bracket {...bracketProps} />);

const CreateRoute = () => withNavigation("Create Bracket", <CreateBracket/>);

const MenuRoute = () => withNavigation("Main Menu", <Menu/>);

const NotFoundRoute = () => <div>Sorry, nothing here.</div>;

const ViewUsersRoute = () => withNavigation("Users", <ViewUsers />)

export {
  ViewRoute,
  CreateRoute,
  MenuRoute,
  NotFoundRoute,
  ViewUsersRoute,
}
