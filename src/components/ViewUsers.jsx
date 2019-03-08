import React from 'react'
import '../styles/ViewUsers.css'

export default class ViewUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  async componentWillMount() {
    await fetch("https://83yeog1v01.execute-api.us-east-1.amazonaws.com/mock/api/user/list", {
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
