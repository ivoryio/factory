export default {
  info: {
    border: 'solid 1px #009fda',
    backgroundColor: '#fff',
    '& > div': {
      'i:first-of-type, .tooltip-text': {
        color: '#009fda'
      }
    },
    '&:after': {
      borderColor: '#009fda',
      backgroundColor: '#fff'
    }
  },
  success: {
    border: 'solid 1px #7dad03',
    backgroundColor: '#fff',
    '& > div': {
      'i:first-of-type, .tooltip-text': {
        color: '#7dad03'
      }
    },
    '&:after': {
      borderColor: '#7dad03',
      backgroundColor: '#fff'
    }
  },
  error: {
    border: 'solid 1px #fb5607',
    backgroundColor: '#fbeae5',
    '& > div': {
      'i, .tooltip-text': {
        color: '#fb5607'
      }
    },
    '&:after': {
      backgroundColor: '#fbeae5',
      borderColor: '#fb5607'
    }
  }
}
