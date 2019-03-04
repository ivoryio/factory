```js
<Icon />
```

#### Custom Icon
```js
const Flex = require('../Responsive/Flex.js').default;
function onClick () {
  console.log('Custom Icon clicked')
};
  <Flex alignItems='center'>
    <Icon name='photo' fontSize='2em' />
    <Icon
      cursor='pointer'
      fontSize='2.5em'
      ml='16px'
      name='exit_to_app'
      onClick={onClick}
    />
  </Flex>
```
