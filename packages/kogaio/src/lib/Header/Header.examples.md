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
  const { default: styled, keyframes } = require('styled-components')
  const { default: images } = require('assets/images')
  console.log('images Header:', images)
  const scaleLogo = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  `
  const IvoryHeader = () => {
  const Logo = styled.img`
    align-self: center;
    animation: ${scaleLogo} infinite 3s ease;
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
    font-size: 1.5rem;
    text-align: center;
  `

  const LogoWrapper = () => (
    <CenterSection>
      <Logo src={images.ivoryLogo} />
      <Title> Ivory </Title>
    </CenterSection>
  )
  const IconWrapper = () => (
    <Icon
      alt='sign-out'
      fontSize={35}
      name='exit_to_app'
      position='absolute'
      right={16}
    />
  )

  return (
    <Header
      center={<LogoWrapper />}
      right={<IconWrapper />}
      bg='white'
      p={1}
      position='relative'
    />
  )}
  <IvoryHeader />
```
