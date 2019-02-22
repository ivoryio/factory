#### Basic Header
```js
const React = require('react')

const HeaderExample = () => {
  return <Header
    left={<p>Left</p>}
    middle={<p>Middle</p>}
    right={<p>Right</p>}
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
const { default: styled } = require('styled-components')
const { default: logoAnimation } = require('assets/logoAnimation.css')
const { default: icons } = require('assets/icons')

const Logo = styled.img`
  animation: logo-scale infinite 3s ease;
  width: 80px;
  height: 80px;
`
const LogoutIcon = styled.img`
  cursor: pointer;
  height: 30px;
  margin-top: 10px;
  position: absolute;
  right: 10px;
  width: 30px;
  :active {
    transform: scale(0.965);
  }
`
const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  color: #51afe7;
  font-size: 25px;
  text-align: center;
`

const Middle = () => (<MiddleSection>
      <Logo src={icons.ivoryLogo} />
      <Title> Ivory </Title>
    </MiddleSection>
  )

const IvoryHeader = () => {
  return <Header
    middle={<Middle />}
    right={<LogoutIcon src={icons.logout} />}
    bg='white'
    p={1}
    position='relative'
  />
}
  <IvoryHeader />
```
