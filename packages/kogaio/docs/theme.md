##### *The snippet below is a peek into the default theme.*
For a painless experience with **Kogaio**, we do not encourage overwriting the entire theme. 

Seek the comments below for recommendations.
```jsx static
    borders = [0, '1px solid', '2px solid', '3px solid', '4px solid']
    breakpoints = {
    xs: '20em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xlg: '120em'
  }
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
    },
    overlay: {
      'background-color'
    }
  }
  fonts = {
    primary:
      'Rubik, sans-serif',
    complementary:
      '"Open+Sans", sans-serif'
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
  fontWeights = ['lighter', 'regular', 'bold']
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
    tracked: '0.1rem',
    tight: '-0.05rem',
    mega: '0.25rem'
  }
  radii = [0, 1, 2, 3, 4, '50%']
  space = [0, 4, 8, 12, 16, 20, 24, ..., 256]
  shadows: {
    'button-shadow',
    'input-basic',
    'card-simple',
    'card-highlight',
    'menu-list'
  }
```
