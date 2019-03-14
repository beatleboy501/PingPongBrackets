import React from 'react'
import { ApiConsumer } from '../providers/InvokeApiContext'
import '../styles/ViewUsers.css'

class ViewUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
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
      console.error(err);
      alert("Something went wrong")
    })
  }

  renderUsers() {
    const {users} = this.state;
    return users.map(user => {
      return (<li key={user.sub}>{user.given_name} {user.family_name}</li>)
    })
  }

  render() {
    return(
      <ul id="users">
        {this.renderUsers()}
      </ul>
    )
  }
}

const ViewUsersElement = (props) => {
  return(
    <ApiConsumer>
    {({base}) => (<ViewUsers base={base} {...props} />)}
    </ApiConsumer>
  )
}

export default ViewUsersElement;
