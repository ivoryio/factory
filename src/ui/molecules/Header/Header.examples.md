#### Basic Header
```js
const React = require('react')
const textCmp = text => <p>{text}</p>

const HeaderExample = () => {
  return <Header
    left={textCmp('Left')}
    middle={textCmp('Middle')}
    right={textCmp('Right')}
    bg='lightgrey'
    p={1}
    position='relative'
  />
}
  <HeaderExample />
```
