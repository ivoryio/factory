export default {
  primary: {
    backgroundImage: 'linear-gradient(to bottom, #00aeef, #009feb)',
    boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
    color: '#fff',
    '&:hover': {
      backgroundImage: 'linear-gradient(to bottom, #01a2de, #0197df)'
    },
    '&:active': {
      transform: 'scale(0.965)'
    },
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none'
    },
    '&:disabled': {
      backgroundColor: '#b9e8fa',
      border: 'solid 1px #92d3eb',
      cursor: 'not-allowed',
      opacity: 0.5,
      transform: 'scale(1)',
      '&:hover': {
        backgroundImage: 'linear-gradient(to bottom, #00aeef, #009feb)'
      }
    }
  },
  outlined: {
    border: 'solid 1px #009fda',
    color: '#00aeef',
    backgroundColor: 'transparent',
    '&:active': {
      transform: 'scale(0.965)'
    },
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none'
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 159, 218, 0.07)'
    },
    '&:disabled': {
      border: 'solid 1px #b9e8fa',
      cursor: 'not-allowed',
      transform: 'scale(1)',
      color: '#b9e8fa',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  },
  success: {
    boxShadow:
      '0 1px 0 0 rgba(22, 29, 37, 0.1), 0 1px 0 0 rgba(22, 29, 37, 0.1), inset 0 1px 0 1px rgba(255, 255, 255, 0.09)',
    border: 'solid 1px #73a000',
    backgroundImage: 'linear-gradient(to bottom, #83b700, #7dad03)',
    color: '#fff',
    '&:active': {
      transform: 'scale(0.965)'
    },
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none'
    },
    '&:hover': {
      backgroundImage: 'linear-gradient(to bottom, #7bab00, #76a400)',
      border: 'solid 1px #699100'
    },
    '&:disabled': {
      border: 'solid 1px #bcd47c',
      backgroundImage: 'linear-gradient(to bottom, #dce19f, #d5eba0)',
      cursor: 'not-allowed',
      transform: 'scale(1)'
    }
  },
  destructive: {
    boxShadow:
      '0 1px 0 0 rgba(22, 29, 37, 0.1), inset 0 1px 0 1px rgba(255, 255, 255, 0.09)',
    border: 'solid 1px #bf0711',
    color: '#fff',
    backgroundImage: 'linear-gradient(to bottom, #e33719, #d63418)',
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none'
    },
    '&:active': {
      transform: 'scale(0.965)'
    },
    '&:hover': {
      backgroundImage: 'linear-gradient(to bottom, #d93518, #cc3216)',
      border: 'solid 1px #b50710'
    },
    '&:disabled': {
      border: 'solid 1px #db9586',
      backgroundImage: 'linear-gradient(to bottom, #fdac9a, #f2a594)',
      cursor: 'not-allowed',
      transform: 'scale(1)'
    }
  }
}
