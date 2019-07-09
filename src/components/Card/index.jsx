import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import propTypes from './propTypes';
import styles from './styles';

function SimpleCard(props) {
  const {
    classes,
    buttonProps,
    subTitleText,
    titleText,
    paragraphText,
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {subTitleText}
        </Typography>
        <Typography variant="h5" component="h2">
          {titleText}
        </Typography>
        <Typography component="p">
          {paragraphText}
        </Typography>
      </CardContent>
      {buttonProps
        && (
          <CardActions>
            <Button size="small" onClick={buttonProps.onClick}>{buttonProps.label}</Button>
          </CardActions>
        )
      }
    </Card>
  );
}

SimpleCard.propTypes = propTypes;

export default withStyles(styles)(SimpleCard);
