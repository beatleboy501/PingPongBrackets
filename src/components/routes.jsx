import Bracket from "./Bracket";
import CreateBracket from "./CreateBracket";
import Menu from "./Menu";
import React from "react";
import Navigation from "./Navigation";
import ViewUsers from './ViewUsers';
import ViewBrackets from './ViewBrackets';

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

const ViewBracketsRoute = () => withNavigation("Brackets", <ViewBrackets />)

export {
  ViewRoute,
  CreateRoute,
  MenuRoute,
  NotFoundRoute,
  ViewBracketsRoute,
  ViewUsersRoute,
}
