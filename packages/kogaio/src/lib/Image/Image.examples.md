```js
  const containerStyle = {
    borderRadius: '10px',
    width: '100px'
  };

  <div style={containerStyle}>
    <Image
      src='https://www.thinslices.com/hubfs/TS%20Logo%20no%20bg-03.png'
      alt='thinslices-logo'
      objectFit='contain'
      size={[120, 80]}
      />
  </div>
```

#### Image with default props
```js
  <Image />
```

#### Custom Image
```js
  const { default: styled } = require('styled-components')
  const Container = styled.div`
    align-items: flex-end;
    display: flex
    justify-content: center;
  `
  const ImageExamples = () => {
    return (
      <Container>
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JbZViMRec7jlTiwhRxV4jvyzdUaM2YCb9Lu2QFonoY6xwtAq'
          alt='profile-logo1'
          mr={34}
          size={[120, 120]}
          borderRadius='50%'
        />
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JbZViMRec7jlTiwhRxV4jvyzdUaM2YCb9Lu2QFonoY6xwtAq'
          alt='profile-logo2'
          mx={34}
          size={[96, 96]}
          borderRadius='50%'
        />
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JbZViMRec7jlTiwhRxV4jvyzdUaM2YCb9Lu2QFonoY6xwtAq'
          alt='profile-logo3'
          mx={34}
          size={[80, 80]}
          borderRadius='50%'
        />
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JbZViMRec7jlTiwhRxV4jvyzdUaM2YCb9Lu2QFonoY6xwtAq'
          alt='profile-logo4'
          mx={34}
          size={[64, 64]}
          borderRadius='50%'
          />
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JbZViMRec7jlTiwhRxV4jvyzdUaM2YCb9Lu2QFonoY6xwtAq'
          alt='profile-logo5'
          ml={34}
          size={[40, 40]}
          borderRadius='50%'
        />
      </Container>
    )
  }
  <ImageExamples />
```