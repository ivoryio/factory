#### Placeholder Icon
```js
<Icon
  fontSize='2.5em'
/>
```

#### Custom Icon
```js
function onClick () {
  console.log('Custom Icon clicked')
};
  <Flex alignItems='center'>
    <Touchable effect='opacity' onClick={onClick}>
      <Icon
        fontSize='2.5em'
        name='exit_to_app'
      />
    </Touchable>
  </Flex>
```
