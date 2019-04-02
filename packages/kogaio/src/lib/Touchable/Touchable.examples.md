####
```js
import { Box, Icon, Flex }  from '../';
  <Flex alignItems='center'>
    <Box width={{ sm: 1, md: 1/2, lg: 1/3 }}>
      <Touchable effect='no-feedback' p='12px' onClick={() => {}}>
        Touchable Without Feedback
      </Touchable>
    </Box>
    <Box width={{ sm: 1, md: 1/2, lg: 1/3 }}>
      <Touchable
        activeOpacity={.75}
        alignItems='center'
        display='flex'
        effect='opacity'
        onClick={() => {}}>
          <Icon fontSize='1.5em' name='calendar_today' /> Touchable Opacity
      </Touchable>
    </Box>
    <Box width={{ sm: 1, md: 1/2, lg: 1/3 }}>
      <Touchable effect='highlight' onClick={() => {}} p='12px' underlayColor='#009fda'>
        Touchable Highlight
      </Touchable>
    </Box>
  </Flex>
```
