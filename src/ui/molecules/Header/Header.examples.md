#### Basic Header
```js
const React = require('react')
const textCmp = text => <p>{text}</p>

const HeaderExample = () => {
  return (<Header
    left={textCmp('Left')}
    middle={textCmp('Middle')}
    right={textCmp('Right')}
    bg='lightgrey'
    p={1}
    position='relative'
  />)
}
  <HeaderExample />
```

#### Header with each section styled
```js
const React = require('react')
const textCmp = text => <p>{text}</p>

const HeaderExample = () => {
  return (<Header
    left={[textCmp('Left1'), textCmp('Left2')]}
    middle={[textCmp('Middle1'), textCmp('Middle2')]}
    right={[textCmp('Right1'), textCmp('Right2')]}
    justifyLeft='space-between'
    justifyMiddle='center'
    justifyRight='space-around'
    flexDirectionLeft='row'
    flexDirectionMiddle='column'
    flexDirectionRight='row'
    alignItemsLeft='center'
    alignItemsMiddle='center'
    alignItemsRight='center'
    bg='lightgrey'
    p={1}
    position='relative'
  />)
}
  <HeaderExample />
```