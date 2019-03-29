const styles = theme => ({
  spacer: {
    flexGrow: '.5'
  },
  gameTop: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      color: 'white',
    },
    'span': {
      float: 'right',
      marginRight: 5
    }
  },
  gameBottom: {
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      color: 'white',
    },
    'span': {
      float: 'right',
      marginRight: 5
    }
  },
  gameSpacer: {
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    minHeight: 40,
    flexGrow: 1.5
  }
});

export default styles;
