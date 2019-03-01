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
          src='https://placeimg.com/120/120/any'
          alt='image-example1'
          mr={34}
          size={[120, 120]}
          borderRadius='50%'
        />
        <Image
          src='https://placeimg.com/96/96/any'
          alt='image-example2'
          mx={34}
          size={[96, 96]}
          borderRadius='50%'
        />
        <Image
          src='https://placeimg.com/80/80/any'
          alt='image-example3'
          mx={34}
          size={[80, 80]}
          borderRadius='50%'
        />
        <Image
          src='https://placeimg.com/64/64/any'
          alt='image-example4'
          mx={34}
          size={[64, 64]}
          borderRadius='50%'
          />
        <Image
          src='https://placeimg.com/40/40/any'
          alt='image-example5'
          ml={34}
          size={[40, 40]}
          borderRadius='50%'
        />
      </Container>
    )
  }
  <ImageExamples />
```