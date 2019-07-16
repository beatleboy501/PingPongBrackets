import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Storage } from 'aws-amplify';
import { withStyles } from '@material-ui/core/styles';
import LoadingWidget from '../LoadingWidget/index';
import propTypes from './propTypes';
import styles from './styles';

class BulkCsvUploads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
    };
  }

  onChange = (e) => {
    this.setState({ isUploading: true });
    const file = e.target.files[0];
    if (!file.name) {
      alert('File has no name');
      this.setState({ isUploading: false });
      return;
    }
    if (!file.name.endsWith('csv')) {
      alert('Bulk upload files must have .csv extension');
      this.setState({ isUploading: false });
      return;
    }
    Storage.put(file.name, file, { contentType: 'text/csv' })
      .then((result) => {
        console.log(result); /* eslint no-console: 0 */
        alert(`Upload successful: ${JSON.stringify(result)}`);
        this.setState({ isUploading: false });
      })
      .catch((err) => {
        alert(err);
        this.setState({ isUploading: false });
      });
  }

  render() {
    const { isUploading } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Card className={classes.card}>
          {!isUploading
            ? (
              <Button
                variant="contained"
                component="label"
              >
                Upload File
                <input
                  type="file"
                  accept="text/csv"
                  onChange={this.onChange}
                  multiple
                  className={classes.input}
                  id="raised-button-file"
                  name="raised-button-file"
                />
              </Button>
            ) : (<LoadingWidget />)
          }
        </Card>
      </div>
    );
  }
}

BulkCsvUploads.propTypes = propTypes;

export default withStyles(styles)(BulkCsvUploads);
