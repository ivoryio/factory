#### Simple Menu List

```js
import { Box, Flex, Space } from '@ivoryio/kogaio/Responsive'
const MenuListExample = () => {
  const listItems = [
    {
      id: 'list-item1',
      name: 'Create item',
      disabled: true
    },
    {
      id: 'list-item2',
      name: 'Update'
    },
    {
      id: 'list-item3',
      name: 'Delete history'
    }
  ]
  return (
    <Flex mx='auto' width={1 / 2}>
      <Box width={{ xs: 1, sm: 1 / 2, lg: 1 / 3 }}>
        <MenuList
          alignment='left'
          arrowSize={10}
          icSize={24}
          id='menulist-1'
          mt={2}
          fontSize='1rem'
          onSelect={item => console.log(`Selected item`, item)}>
          {listItems.map(item => (
            <MenuList.Item
              disabled={item.disabled}
              id={item.id}
              label={item.name}
              key={item.id}
              value={item}
            />
          ))}
        </MenuList>
      </Box>
      <Box width={{ xs: 1, sm: 1 / 2, lg: 1 / 3 }}>
        <MenuList
          alignment='center'
          arrowSize={10}
          icName='settings'
          icSize={24}
          id='menu-list-2'
          mt={2}
          fontSize='1rem'
          onSelect={item => console.log(`Selected ${item}`)}>
          {listItems.map(item => (
            <MenuList.Item id={item.id} key={item.id} value={item.name}>
              {item.name}
            </MenuList.Item>
          ))}
        </MenuList>
      </Box>
      <Box width={{ xs: 1, sm: 1 / 2, lg: 1 / 3 }}>
        <MenuList
          alignment='right'
          arrowSize={10}
          icName='account_circle'
          icSize={24}
          id='menu-list-3'
          mt={2}
          fontSize='1rem'
          onSelect={item => console.log(`Selected ${item}`)}>
          {listItems.map(item => (
            <MenuList.Item id={item.id} key={item.id} value={item.name}>
              {item.name}
            </MenuList.Item>
          ))}
        </MenuList>
      </Box>
    </Flex>
  )
}
;<MenuListExample />
```
