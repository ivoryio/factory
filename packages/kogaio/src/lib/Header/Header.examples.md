#### Basic Header
```js
  import styled from 'styled-components';
  import { Box, Typography } from '../'
  
  const HeaderExample = () => {
    const TextComponent = text => <TextContainer>
    <Typography message={text} />
    </TextContainer>

  const TextContainer = styled(Box)`
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
  import styled, { keyframes } from 'styled-components';
  import images from 'assets/images';
  import { Icon } from '../'

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
      fontSize={5}
      name='exit_to_app'
      position='absolute'
      right='16px'
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
