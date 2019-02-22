#### Basic Header
```js
const React = require('react')
const textCmp = text => <p>{text}</p>

const HeaderExample = () => {
  return <Header
    left={textCmp('Left')}
    middle={textCmp('Middle')}
    right={textCmp('Right')}
    bg='lightgrey'
    p={1}
    position='relative'
  />
}
  <HeaderExample />
```

#### Ivory Header
```js
const React = require('react')
const styled = require('styled-components')
const logoAnimation = require('assets/logoAnimation.css')
const Icon = require('../../atoms/Icon/Icon.js')

const IvoryHeader = () => {
  return <Header
    middle={
    <MiddleSection>
      <Logo src='https://www.thinslices.com/hubfs/TS%20Logo%20no%20bg-03.png' />
      <Title> Ivory </Title>
    </MiddleSection>
    }
    bg='lightgrey'
    p={1}
    position='relative'
  />

  const MiddleSection = styled.div`

  `
  const Title = styled.h3`
    margin-block-start: 0;
    margin-block-end: 0;
    color: #51afe7;
    font-size: 25px;
  `
  const Logo = styled.img`
  animation: logo-scale infinite 3s ease;
  width: 80px;
  height: 80px;
`
}
  <IvoryHeader />
```
