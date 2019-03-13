import React from 'react';
import '../styles/CreateBracket.css';
import FORMATS from '../constants/NumberOfTeamsFormat';
import {navigate} from "@reach/router"
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typeahead from './Typeahead';
import {Auth} from 'aws-amplify';

class CreateBracket extends React.Component {
  constructor(props) {
    super(props);
    const selectValue = Object.keys(FORMATS)[0];
    this.state = {
      title: "",
      users: [],
      suggestions: [],
      selectValue
    };
    this.goBack = this.goBack.bind(this);
    this.submit = this.submit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateSelectValue = this.updateSelectValue.bind(this);
    this.renderEntryInputs = this.renderEntryInputs.bind(this);
  }

  async componentDidMount() {
    this.owner = await Auth.currentAuthenticatedUser()
    await fetch("https://83yeog1v01.execute-api.us-east-1.amazonaws.com/mock/api/user/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then(suggestions => this.setState({ suggestions }))
    .catch((err) => {
      console.error(err);
      alert("Something went wrong")
    })
  }

  updateEntry(seed, selectedUser) {
    const { users } = this.state;
    let newUsers = users.slice();
    newUsers[seed] = selectedUser;
    this.setState({users: newUsers});
  }

  renderEntryInputs() {
    const {selectValue, suggestions} = this.state;
    const suggestionOpts = suggestions.map(suggestion => {
      return { // TODO: make this look like what the Lambda function is expecting
        label: `${suggestion.given_name} ${suggestion.family_name}`,
        given_name: suggestion.given_name,
        family_name: suggestion.family_name,
        id: suggestion.sub,
        value: suggestion.sub
      }
    })
    const seeds = [];
    for (let i = 0; i < FORMATS[selectValue].users; i++) {
      seeds.push(
        <li key={`seed-${i + 1}`}>
          <Typeahead seed={i + 1} onChange={this.updateEntry.bind(this, i)} suggestions={suggestionOpts} />
        </li>
      )
    }
    return seeds;
  }

  updateInputValue(e) {
    this.setState({
      title: e.target.value
    })
  }

  updateSelectValue(e) {
    this.setState({
      selectValue: e.target.value
    })
  }

  goBack(e) {
    e.preventDefault();
    navigate('/')
  }

  submit(e) {
    e.preventDefault();
    let {title, users} = this.state;
    users = users.map((user, index) => {
      const seed = index + 1;
      return {
        id: user.id,
        given_name: user.given_name,
        family_name: user.family_name,
        seed: seed,
        rank: seed
      }
    });
    fetch("https://83yeog1v01.execute-api.us-east-1.amazonaws.com/mock/api/bracket/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: title, users: users, owner: this.owner.attributes.sub })
    })
      .then((res) => res.json())
      .then(json => navigate(`bracket/${json.bracket.id}`))
      .catch((err) => {
        console.error(err);
        alert("Something went wrong in Creating Bracket")
      })
  }

  render() {
    const {title, selectValue} = this.state;
    const options = Object.entries(FORMATS).map(format => {
      return (
        <MenuItem
          key={`users-${format[1].users}`}
          value={format[0]}
        >
          {format[1].users}
        </MenuItem>
      );
    });

    return (
      <div id="create-bracket">
        <form>
          <div>
            <TextField
              name="title"
              label="Bracket Title"
              value={title}
              onChange={this.updateInputValue}
              margin="normal"
              variant="outlined"
              className="bracket-title"
            />
            <FormControl className="number-of-users">
              <InputLabel htmlFor="format">
                Number of Users
              </InputLabel>
              <Select
                value={selectValue}
                onChange={this.updateSelectValue}
                inputProps={{
                  name: 'format',
                  id: 'format',
                }}
              >
                {options}
              </Select>
            </FormControl>
          </div>
          <ul id="bracket-users">
            {this.renderEntryInputs()}
          </ul>
          <div>
            <Button
              type="button"
              className="cancel-button"
              variant="contained"
              color="secondary"
              onClick={this.goBack}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="submit-button"
              variant="contained"
              color="primary"
              onClick={this.submit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBracket;
