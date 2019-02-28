export default {
  disabled: {
    border: 'solid 1px #dfe3e8',
    backgroundColor: '#f9fafb',
    '::placeholder': {
      color: '#c4cdd5'
    }
  },
  error: {
    backgroundColor: '#fbeae5',
    boxShadow: '0 1px 0 0 rgba(22, 29, 37, 0.05)',
    border: 'solid 1px #fb5607',
    '::placeholder': {
      color: '#1b202f'
    },
    '&:focus': {
      border: 'solid 1px #fb5607',
      boxShadow: '0 1px 0 0 rgba(22, 29, 37, 0.05)',
      color: '#1b202f',
      outline: 'none',
      outlineStyle: 'none',
      outlineColor: 'transparent',
      '::placeholder': {
        color: '#1b202f'
      }
    },
  },
  primary: {
    backgroundColor: '#ffffff',
    boxShadow: 'inset 0 1px 2px 0 rgba(102, 113, 123, 0.21), inset 0 0 0 1px rgba(102, 113, 123, 0.25)',
    border: 'solid 1px #c4cdd5',
    '::placeholder': {
      color: '#c4cdd5'
    },
    '&:focus': {
      border: 'solid 1px #009fda',
      boxShadow: '0 1px 0 0 rgba(22, 29, 37, 0.05)',
      color: '#1b202f',
      outline: 'none',
      outlineStyle: 'none',
      outlineColor: 'transparent',
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
    boxShadow: '0 1px 0 0 rgba(22, 29, 37, 0.05)',
    color: '#1b202f',
    outline: 'none',
    outlineStyle: 'none',
    outlineColor: 'transparent',
  }
}
