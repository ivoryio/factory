#### Simple Menu List
```js
const React = require('react')
const { useState } = React
const { default: Icon } = require('../Icon')
const MenuListExample = () => {
const [selectedItem, setSelectedItem] = useState('')
const [showList, setShowList] = useState(false)
const onChangeItem = item =>
  setSelectedOption(item)
const onChangeShowList = () =>
  setShowList(!showList)
const selectItem = item => () => {
    onChangeItem(item)
    onChangeShowList()
  }
const listItems = [
  {
    key: 'list-item1',
    name: 'Menu list item 1'
  },
  {
    key: 'list-item2',
    name: 'Menu list item 2'
  },
  {
    key: 'list-item3',
    name: 'Menu list item 3'
  }
]
const menuListWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}
  return (
    <div style={menuListWrapper}>
      <Icon
        cursor='pointer'
        name='notification_important'
        onClick={onChangeShowList}
        fontSize='2rem'
      />
      { showList &&
      <MenuList
        mt={2}
        fontSize='1rem'
        fontFamily='Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
        onSelectItem={selectItem}
        listItems={listItems}
        width={{ xs: 1/2, md: 1/3, lg: 1/4}}
      />
      }
    </div>
  )
}
  <MenuListExample />
```