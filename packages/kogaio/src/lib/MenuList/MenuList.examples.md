#### Simple Menu List
```js
const React = require('react')
const { useState } = React
const { default: Icon } = require('../Icon')

const MenuListExample = () => {
const listItems = [
  {
    id: 'list-item1',
    name: 'Menu list item 1'
  },
  {
    id: 'list-item2',
    name: 'Menu list item 2'
  },
  {
    id: 'list-item3',
    name: 'Menu list item 3'
  }
]
const MyCustomToggler = ({ onClick }) => (
  <div
    style={{ cursor: 'pointer', color: 'blue' }}
    onClick={onClick}>
      Test
  </div>
)
  return (
    <Flex>
      <Box width={{ xs: 1, sm: 1/2, lg: 1/3 }}>
        <MenuList
          alignment='left'
          arrowSize={10}
          icSize={24}
          id='menu'
          colors='menu-list'
          mt={2}
          fontSize='1rem'
          onSelectItem={item => console.log(`Selected ${item}`)}
          listItems={listItems}
        />
      </Box>
      <Box width={{ xs: 1, sm: 1/2, lg: 1/3}}>
        <MenuList
          alignment='center'
          arrowSize={10}
          icName='settings'
          icSize={24}
          id='menu2'
          colors='menu-list'
          mt={2}
          fontSize='1rem'
          onSelectItem={item => console.log(`Selected ${item}`)}
          listItems={listItems}
        />
      </Box>
      <Box width={{ xs: 1, sm: 1/2, lg: 1/3}}>
        <MenuList
          alignment='right'
          arrowSize={10}
          icName='account_circle'
          icSize={24}
          id='menu3'
          colors='menu-list'
          mt={2}
          fontSize='1rem'
          onSelectItem={item => console.log(`Selected ${item}`)}
          listItems={listItems}
        />
      </Box>
    </Flex>
  )
}
  <MenuListExample />
```