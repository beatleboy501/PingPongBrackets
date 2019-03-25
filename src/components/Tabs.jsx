import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {styles, tabContainerStyles} from '../styles/Tabs';

function TabContainer(props) {
  return (
    <Typography component="div" style={tabContainerStyles}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  renderTabs() {
    const { content } = this.props;
    return content.map(tab => {
      return(
        <Tab key={Math.random()} label={tab.label} />
      )
    })
  }

  renderTabContainers = () => {
    const { value } = this.state;
    const { content } = this.props;
    const tabContainers = content.map(tab => {
      return(
        <TabContainer key={Math.random()}>
          {tab.children}
        </TabContainer>
      )
    })
    return (
      <React.Fragment>
        {tabContainers[value]}
      </React.Fragment>
    )
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
            {this.renderTabs()}
          </Tabs>
        </AppBar>
        {this.renderTabContainers()}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string
  }))
};

export default withStyles(styles)(SimpleTabs);
