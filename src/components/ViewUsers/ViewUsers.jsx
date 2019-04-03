import React from 'react';
import propTypes from './propTypes';
import Card from '../Card/index.jsx';
import LoadingWidget from '../LoadingWidget/index';

class ViewUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: true
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
    .then(res => res.json())
    .then(users => this.setState({ users, isLoading: false }))
    .catch(err => {
      console.error(err); /* eslint no-console: 0 */
      alert("Something went wrong")
    })
    window.scrollTo(0,0);
  }

  contact(email) {
    window.open(`mailto:${email}?subject=Ping%20Pong%20Brackets`, '_blank')
  }

  render() {
    const {users, isLoading} = this.state;
    if(isLoading) return <LoadingWidget />;
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

export default ViewUsers;
