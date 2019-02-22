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
const { default: styled } = require('styled-components')
const { default: logoAnimation } = require('assets/logoAnimation.css')
const { default: icons } = require('assets/icons')

const Logo = styled.img`
  animation: logo-scale infinite 3s ease;
  width: 80px;
  height: 80px;
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
    bg='lightgrey'
    p={1}
    position='relative'
  />
}
  <IvoryHeader />
```
