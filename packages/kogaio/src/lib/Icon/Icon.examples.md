#### Placeholder Icon
```js
<Icon />
```

#### Custom Icon
```js
const { default: icons } = require('assets/icons')

function onClick () {
  console.log('Custom Icon clicked')
}
<Icon
  alt='signOut'
  onClick={onClick}
  size={[50, 50]}
  src={icons.logout}
/>
```
