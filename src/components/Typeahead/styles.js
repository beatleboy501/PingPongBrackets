const ellipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    minWidth: '7rem',
    cursor: 'default',
    width: '12rem',
  },
  input: {
    display: 'flex',
    cursor: 'default',
    padding: 0,
    ...ellipsis,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    maxHeight: '2rem',
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
    ...ellipsis,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    zIndex: 1,
    position: 'fixed',
  },
});

export default styles;
