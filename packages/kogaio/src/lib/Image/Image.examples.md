#### Placeholder
```js
import { Box } from '@ivoryio/kogaio/Responsive';
  <Box alignItems='center'>
    <Image size={120} />
  </Box>
```

#### Custom Images
```js
  import styled from 'styled-components';
  import { Flex, Space } from '@ivoryio/kogaio/Responsive';

  const images = [
      { id: 'alt1', src: 'https://placeimg.com/120/120/any', size: 120 },
      { id: 'alt2', src: 'https://placeimg.com/96/96/any', size: 96 },
      { id: 'alt3', src: 'https://placeimg.com/80/80/any', size: 80 },
      { id: 'alt4', src: 'https://placeimg.com/64/64/any', size: 64 } ,
      { id: 'alt5', src: 'https://placeimg.com/40/40/any', size: 40 }
    ];
  const ImageExamples = () => {
    return (
      <Flex alignItems='center' width={1}>
        {images.map(img => (
          <Space key={img.id} ml={4}>
            <Image
              alt={img.id}
              borderRadius='round'
              size={img.size}
              src={img.src}
            />
          </Space>
        ))}
      </Flex>
    )
  }
  <ImageExamples />
```