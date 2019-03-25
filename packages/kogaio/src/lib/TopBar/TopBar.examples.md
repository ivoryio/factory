```js
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
];
const CustomMenuLeft = (() => (
  <MenuList
    alignment='left'
    arrowSize={10}
    icSize={24}
    id='custom-topbar-menu-left'
    icName='menu'
    colors='menu-list'
    icColor='white'
    fontSize='1em'
    onSelectItem={item => console.log(`Selected ${item}`)}
    listItems={listItems}
  />
))();
const CustomMenuRight = (() => (
  <MenuList
    alignment='right'
    arrowSize={10}
    icSize={24}
    id='custom-topbar-menu-right'
    icName='notifications'
    colors='menu-list'
    icColor='white'
    fontSize='1em'
    onSelectItem={item => console.log(`Selected ${item}`)}
    listItems={listItems}
  />
))();
  <TopBar
    color='white'
    bg='independence'
    IconLeft={CustomMenuLeft}
    IconRight={CustomMenuRight}
    icSize='1.5em'
    title='My App Bar'
  />
```