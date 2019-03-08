#### Placeholder Icon
```js
<Icon
  cursor='pointer'
  fontSize='2.5em'
/>
```

#### Custom Icon
```js
const Flex = require('../Responsive/Flex.js').default;
function onClick () {
  console.log('Custom Icon clicked')
};
  <Flex alignItems='center'>
    <Icon
      cursor='pointer'
      fontSize='2.5em'
      name='exit_to_app'
      onClick={onClick}
    />
  </Flex>
```
