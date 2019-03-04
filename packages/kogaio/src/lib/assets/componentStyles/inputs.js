export default {
  default: {
    border: 'solid 1px #b3c3d4',
    '::placeholder': {
      color: '#979ca6'
    },
    '&:focus': {
      border: 'solid 1px #009fda',
      color: '#1b202f',
      '::placeholder': {
        color: '#1b202f'
      }
    },
    '&:hover': {
      border: 'solid 1px #009fda'
    }
  },
  valid: {
    border: 'solid 1px #7dad03',
    color: '#1b202f'
  },
  error: {
    backgroundColor: '#fbeae5',
    border: 'solid 1px #fb5607',
    '::placeholder': {
      color: '#1b202f'
    }
  },
  disabled: {
    border: 'solid 1px #dfe3e8',
    backgroundColor: '#f9fafb',
    boxShadow: 'none',
    '::placeholder': {
      color: '#979ca6'
    },
    cursor: 'not-allowed'
  }
}
