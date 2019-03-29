export default {
  createBracket: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bracketForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  bracketInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    flexWrap: 'wrap',
    minHeight: '10rem',
    maxWidth: '50%'
  },
  bracketTitle: {
    width: '20rem',
    margin: '1rem'
  },
  numberOfUsers: {
    width: '10rem',
    margin: '1rem'
  },
  entryInputs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    flexWrap: 'wrap',
    maxWidth: '70%',
    maxHeight: '9rem',
    '& > div': {
      margin: '0 1rem',
      maxWidth: '10rem',
    }
  },
  cancelButton: {
    width: '5rem',
    height: '4rem',
    margin: '1rem',
  },
  submitButton: {
    width: '5rem',
    height: '4rem',
    margin: '1rem',
  },
}
