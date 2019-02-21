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

class CreateBracket extends React.Component {
  constructor(props) {
    super(props);
    const selectValue = Object.keys(FORMATS)[0];
    this.state = {
      title: "",
      selectValue
    };
    this.goBack = this.goBack.bind(this);
    this.submit = this.submit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateSelectValue = this.updateSelectValue.bind(this)
    this.renderEntryInputs = this.renderEntryInputs.bind(this)
  }

  renderEntryInputs() {
    const {selectValue} = this.state;
    const seeds = [];
    for (let i = 0; i < FORMATS[selectValue].users; i++) {
      seeds.push(
        <li key={`seed-${i}`}>
          <TextField
            label={`Seed ${Number.parseInt(i) + 1}`}
            type="text"
            name={`seed-${i}`}
            margin="normal"
            variant="outlined"
          />
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
    const {title} = this.state;
    fetch("https://o76r421szk.execute-api.us-east-1.amazonaws.com/mock-api/bracket/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title: title})
    })
      .then((res) => {
        return res.json()

      })
      .then(json => {
        navigate(`bracket/${title}`, {state: json})
      })
      .catch((err) => {
        console.error(err)
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
