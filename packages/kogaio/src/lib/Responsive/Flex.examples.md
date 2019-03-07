#### Responsive container
###### Drag to resize
```js
<Flex flexWrap='wrap' mx={-2}>
  <Box
    px={2}
    py={3}
    width={{ xs: 1, sm: 1/2, md: 1/3 }}
    textAlign='left'>
    <Typography
      p={3}
      message='These boxes'
      fontSize={{ xs: 1, md: 2, xlg: 3 }}
      color='#fff'
      bg='#87CEFA'
      fontFamily='Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
    />
  </Box>
  <Box
    px={2}
    py={3}
    textAlign='center'
    width={{ xs: 1, sm: 1/2, md: 1/3 }}>
    <Typography
      p={3}
      message='are flexible'
      fontSize={{ xs: 1, sm: 2, xlg: 3 }}
      color='#fff'
      bg='#6495ED'
      fontFamily='Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
    />
  </Box>
  <Box
    px={2}
    py={3}
    width={{ xs: 1, sm: 1/2, md: 1/3 }}
    textAlign='right'>
      <Typography
        p={3}
        message='and responsive'
        fontSize={{ xs: 1, sm: 2, xlg: 3 }}
        color='#fff'
        bg='#191970'
        fontFamily='Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
      />
  </Box>
</Flex>
```