import React from 'react';
import propTypes from './propTypes';
import FORMATS from '../../constants/NumberOfTeamsFormat';
import {navigate} from "@reach/router";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typeahead from '../Typeahead/index';
import {Auth} from 'aws-amplify';

class CreateBracket extends React.Component {
  constructor(props) {
    super(props);
    const selectValue = Object.keys(FORMATS)[0];
    this.state = {
      title: "",
      users: [],
      suggestions: [],
      availableSuggestions: [],
      selectValue
    };
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateSelectValue = this.updateSelectValue.bind(this);
    this.renderEntryInputs = this.renderEntryInputs.bind(this);
  }

  async componentDidMount() {
    this.owner = await Auth.currentAuthenticatedUser()
    const { base } = this.props;
    await fetch(`${base}/user/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then(suggestions => this.setState({ suggestions, availableSuggestions: suggestions }))
    .catch((err) => {
      console.error(err) /* eslint no-console: 0 */
      alert("Something went wrong")
    })
    window.scrollTo(0,0);
  }

  updateEntry(seed, selectedUser) {
    const { suggestions, users } = this.state;
    let newUsers = users.slice();
    newUsers[seed] = selectedUser;
    let newSuggestions = suggestions.slice();
    const userIds = newUsers.length ? newUsers.map(u => u ? u.id : "") : [];
    newSuggestions = newSuggestions.filter(s => !userIds.includes(s.sub));
    this.setState({users: newUsers, availableSuggestions: newSuggestions});
  }

  renderEntryInputs() {
    const {selectValue, availableSuggestions} = this.state;
    const suggestionOpts = availableSuggestions.map(suggestion => {
      return {
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
        <Typeahead
          key={`seed-${i + 1}`}
          seed={i + 1}
          onChange={this.updateEntry.bind(this, i)}
          suggestions={suggestionOpts} />
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

  handleSubmit(e) {
    e.preventDefault();
    let {title, users} = this.state;
    const { base } = this.props;
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
    fetch(`${base}/bracket/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        users: users,
        owner: this.owner.attributes.sub
      })
    })
      .then(res => res.json())
      .then(json => navigate(`bracket/${json.bracket.id}`))
      .catch(err => {
        console.error(err) /* eslint no-console: 0 */
        alert("Something went wrong in Creating Bracket")
      })
  }

  render() {
    const {title, selectValue} = this.state;
    const { classes } = this.props;
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
      <div className={classes.createBracket}>
        <form className={classes.bracketForm}>
          <div className={classes.bracketInfo}>
            <TextField
              name="title"
              label="Bracket Title"
              value={title}
              onChange={this.updateInputValue}
              margin="normal"
              variant="outlined"
              className={classes.bracketTitle}
            />
            <FormControl className={classes.numberOfUsers}>
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
          <div className={classes.entryInputs}>
            {this.renderEntryInputs()}
          </div>
          <div>
            <Button
              type="button"
              className={classes.cancelButton}
              variant="contained"
              color="default"
              onClick={this.goBack}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={classes.submitButton}
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

CreateBracket.propTypes = propTypes;

export default CreateBracket;
