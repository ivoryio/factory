#### Basic Header
```js
  const React = require('react')
  const { default: styled } = require('styled-components')

  const HeaderExample = () => {
    const TextComponent = text => <TextContainer>
    <Text message={text} />
    </TextContainer>

    const TextContainer = styled.div`
    flex: 1;
    text-align: center;
    `

    return (
      <Header
        bg='#eee'
        left={TextComponent('Left')}
        center={TextComponent('Center')}
        right={TextComponent('Right')}
        position='relative'
      />
    )
  }
  <HeaderExample />
```

#### Ivory Header
```js
  const React = require('react')
  const { default: styled } = require('styled-components')
  const { default: icons } = require('assets/icons')

  const IvoryHeader = () => {
  const Logo = styled.img`
    align-self: center;
    animation: logo-scale infinite 3s ease;
    width: 80px;
    height: 80px;
  `

  const LogoutIcon = styled.img`
    cursor: pointer;
    height: 20px;
    position: absolute;
    right: 12px;
    width: 20px;
    :active {
      transform: scale(0.965);
    }
  `

  const CenterSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-self: center;
  `

  const Title = styled.h3`
    align-self: center;
    margin-block-start: 0;
    margin-block-end: 0;
    color: #51afe7;
    font-size: 25px;
    text-align: center;
  `

  const LogoWrapper = () => (
    <CenterSection>
      <Logo src={icons.ivoryLogo} />
      <Title> Ivory </Title>
    </CenterSection>
  )

  return (
    <Header
      center={<LogoWrapper />}
      right={<LogoutIcon src={icons.logout} />}
      bg='white'
      p={1}
      position='relative'
    />
  )}
  <IvoryHeader />
```
