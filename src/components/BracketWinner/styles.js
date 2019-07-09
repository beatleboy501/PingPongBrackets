const styles = theme => ({
  spacer: {
    flexGrow: '.5',
  },
  gameTop: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    fontWeight: 'bold',
    '&:hover': {
      color: 'white',
    },
    span: {
      float: 'right',
      marginRight: 5,
    },
  },
  round: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '200px',
    listStyle: 'none',
    padding: 0,
    cursor: 'default',
  },
});

export default styles;
