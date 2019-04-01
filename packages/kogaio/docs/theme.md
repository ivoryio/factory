##### *The snippet below is a peek into the default theme.*
For a painless experience with **Kogaio**, we do not encourage overwriting the entire theme. 

Seek the comments below for recommendations.
```JSX
  breakpoints = {
    xs: '20em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xlg: '120em'
  }
  borders = [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid'
  ]
  colors = { 
    // #region recommended for overwriting
    brand,
    'brand-hover',
    'brand-disabled',
    'outline-hover',
    'outline-disabled',
    error,
    'error-hover',
    alert,
    info,
    success,
    // #endregion
    white,
    'pale-white',
    'ghost-white',
    'white-smoke',
    'ice-white',
    'azure-white',
    'pastel-blue',
    'light-gray',
    manatee,
    'paynes-gray',
    independence,
    gunmetal,
    'dark-gunmetal',
    black
  }
  // #region recommended for overwriting
  colorStyles: {
    'card-white': {
      boxShadow,
      backgroundColor
    },
    'card-gray': {
      boxShadow,
      backgroundColor
    },
    'menu-list': {
      boxShadow,
      backgroundColor
    },
    'modal-background',
    'button-outline-alt': {
      color,
      border,
      '&:hover': {
        border
      }
    },
    'button-outline-dark': {
      color,
      border,
      '&:hover': {
        border
      }
    }
  }
  fonts = {
    primary:
      'Rubik, sans-serif',
    complementary:
      '"Open Sans", sans-serif'
  }
  // #endregion
  fontSizes = [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem'
  ]
  fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
  lineHeights = {
    solid: 1,
    title: 1.25,
    copy: 1.5,
    tooltip: 1.6,
    button: 1.9,
    input: 2
  }
  letterSpacings = {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  }
  radii = [0, 1, 2, 4, 16, 32, '50%', '100%']
  space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 84, 96, 128, 256]
  shadows: {
    'button-shadow',
    'input-basic',
    'card-simple',
    'card-highlight',
    'menu-list'
  }
```
