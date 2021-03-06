import React from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import propTypes from './propTypes';
import options from '../../constants/MenuOptions';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e, option) => {
    e.preventDefault();
    switch (option) {
      case options.createNewBracket:
        navigate('new');
        break;
      case options.viewMyBrackets:
        navigate('brackets');
        break;
      case options.viewUsers:
        navigate('users');
        break;
      case options.bulkCsvUploads:
        navigate('csv');
        break;
      default:
        break;
    }
  }

  render() {
    const { classes } = this.props;
    const {
      bulkCsvUploads,
      createNewBracket,
      viewMyBrackets,
      viewUsers,
    } = options;
    return (
      <div className={classes.mainMenu}>
        {[
          [createNewBracket, 'Create New Bracket'],
          [viewMyBrackets, 'View My Brackets'],
          [viewUsers, 'View Users'],
          [bulkCsvUploads, 'Bulk CSV Uploads'],
        ].map(opt => (
          <Button
            key={Math.random()}
            onClick={e => this.clickHandler(e, opt[0])}
            type="button"
            variant="contained"
            color="primary"
          >
            {opt[1]}
          </Button>
        ))}
      </div>
    );
  }
}

Menu.propTypes = propTypes;

export default withStyles(styles)(Menu);
