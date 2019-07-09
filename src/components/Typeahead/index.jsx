/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Select from 'react-select';
import styles from './styles';
import typeaheadPropTypes from './propTypes'; /* eslint import/no-named-as-default: 0 */
import Menu from './Menu';
import ValueContainer from './ValueContainer';
import SingleValue from './SingleValue';
import Placeholder from './Placeholder';
import Option from './Option';
import { Control } from './Control';
import NoOptionsMessage from './NoOptionsMessage';

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class Typeahead extends React.Component {
  state = {
    single: null,
  };

  handleChange = name => (value) => {
    const { onChange } = this.props;
    this.setState({
      [name]: value,
    }, () => {
      onChange(value);
    });
  };

  render() {
    const {
      classes,
      theme,
      seed,
      suggestions,
    } = this.props;
    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };
    const { single } = this.state;
    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={suggestions}
            components={components}
            value={single}
            onChange={this.handleChange('single')}
            placeholder={`Seed ${seed}`}
            isClearable
          />
        </NoSsr>
      </div>
    );
  }
}

Typeahead.propTypes = typeaheadPropTypes;

export default withStyles(styles, { withTheme: true })(Typeahead);
