import React from 'react';
import PropTypes from 'prop-types';
import { ApiConsumer } from '../providers/InvokeApiContext';
import Card from './Card.jsx';
import '../styles/ViewUsers.css';

const propTypes = {
  base: PropTypes.string.isRequired,
}

class ViewUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.contact = this.contact.bind(this);
  }

  async componentWillMount() {
    const {base} = this.props;
    await fetch(`${base}/user/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      return res.json()
    })
    .then(users => this.setState({ users }))
    .catch((err) => {
      console.error(err); /* eslint no-console: 0 */
      alert("Something went wrong")
    })
    window.scrollTo(0,0);
  }

  contact(email) {
    window.open(`mailto:${email}?subject=Ping%20Pong%20Brackets`, '_blank')
  }

  render() {
    const {users} = this.state;
    return users.map(user => {
      return (
        <Card
          key={user.sub}
          titleText={`${user.given_name} ${user.family_name}`}
          paragraphText={user.email}
          buttonProps={{
            label: "Contact",
            onClick: () => this.contact(user.email)
          }}
        />
      )
    })
  }
}

ViewUsers.propTypes = propTypes;

const ViewUsersElement = (props) => {
  return(
    <ApiConsumer>
    {({base}) => (<ViewUsers base={base} {...props} />)}
    </ApiConsumer>
  )
}

export default ViewUsersElement;
