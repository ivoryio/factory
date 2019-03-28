#### Placeholder
```js
  <Box alignItems='center'>
    <Image size={120} />
  </Box>
```

#### Custom Images
```js
  const { default: styled } = require('styled-components');
  const images = [
      { id: 'alt1', src: 'https://placeimg.com/120/120/any', size: 120 },
      { id: 'alt2', src: 'https://placeimg.com/96/96/any', size: 96 },
      { id: 'alt3', src: 'https://placeimg.com/80/80/any', size: 80 },
      { id: 'alt4', src: 'https://placeimg.com/64/64/any', size: 64 } ,
      { id: 'alt5', src: 'https://placeimg.com/40/40/any', size: 40 }
    ];
  const ImageExamples = () => {
    return (
      <Flex>
        <Box width={1} mt={3}>
          {images.map(img => (
            <Image
              alt={img.id}
              borderRadius='50%' 
              key={img.id}
              ml={3}
              size={img.size}
              src={img.src}
            />
          ))}
        </Box>
      </Flex>
    )
  }
  <ImageExamples />
```