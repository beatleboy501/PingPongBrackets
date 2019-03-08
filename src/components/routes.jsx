import Bracket from "./Bracket";
import CreateBracket from "./CreateBracket";
import Menu from "./Menu";
import React from "react";
import Header from "./Header";
import ViewUsers from './ViewUsers';

const withHeader = (pageTitle, component) => {
  return (
    <React.Fragment>
      <Header pageTitle={pageTitle} />
      {component}
    </React.Fragment>
  )
};

const ViewRoute = (bracketProps) => withHeader('Bracket', <Bracket {...bracketProps} />);

const CreateRoute = () => withHeader("Create Bracket", <CreateBracket/>);

const MenuRoute = () => withHeader("Main Menu", <Menu/>);

const NotFoundRoute = () => <div>Sorry, nothing here.</div>;

const ViewUsersRoute = () => withHeader("Users", <ViewUsers />)

export {
  ViewRoute,
  CreateRoute,
  MenuRoute,
  NotFoundRoute,
  ViewUsersRoute,
}
