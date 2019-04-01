#### Responsive container
###### Drag to resize
```js
<Flex flexWrap='wrap' mx={-2}>
  <Box
    px={2}
    py={4}
    width={{ xs: 1, sm: 1/2, md: 1/3 }}
    textAlign='left'>
    <Typography
      p={4}
      message='These boxes'
      fontSize={{ xs: 1, md: 2, xlg: 3 }}
      color='white'
      bg='info'
    />
  </Box>
  <Box
    px={2}
    py={4}
    textAlign='center'
    width={{ xs: 1, sm: 1/2, md: 1/3 }}>
    <Typography
      p={4}
      message='are flexible'
      fontSize={{ xs: 1, sm: 2, xlg: 3 }}
      color='white'
      bg='alert'
    />
  </Box>
  <Box
    px={2}
    py={4}
    width={{ xs: 1, sm: 1/2, md: 1/3 }}
    textAlign='right'>
      <Typography
        p={4}
        message='and responsive'
        fontSize={{ xs: 1, sm: 2, xlg: 3 }}
        color='white'
        bg='error'
      />
  </Box>
</Flex>
```