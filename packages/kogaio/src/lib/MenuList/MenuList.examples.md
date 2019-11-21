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
    <Space mx='auto'>
      <Flex flexDirection='column' width={1 / 2}>
        <Box width={{ xs: 1, sm: 1 / 2, lg: 1 / 3 }}>
          <Space mt={2}>
            <MenuList
              alignment='left'
              arrowSize={10}
              listStyle={{
                zIndex: 1
              }}
              icon={{
                color: 'gunmetal',
                name: 'notification_important',
                size: 24
              }}
              id='menulist-1'
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
          </Space>
        </Box>
        <Box width={{ xs: 1, sm: 1 / 2, lg: 1 / 3 }}>
          <Space mt={2}>
            <MenuList
              alignment='center'
              arrowSize={12}
              icon={{ color: 'manatee', name: 'settings', size: 24 }}
              id='menu-list-2'
              listStyle={{
                zIndex: 1
              }}
              fontSize='1rem'
              onSelect={item => console.log(`Selected ${item}`)}>
              {listItems.map(item => (
                <MenuList.Item id={item.id} key={item.id} value={item.name}>
                  {item.name}
                </MenuList.Item>
              ))}
            </MenuList>
          </Space>
        </Box>
        <Box width={{ xs: 1, sm: 1 / 2, lg: 1 / 3 }}>
          <Space mt={2}>
            <MenuList
              alignment='right'
              arrowSize={10}
              listStyle={{
                zIndex: 1
              }}
              icon={{ color: 'dark-gunmetal', name: 'more_horiz', size: 24 }}
              id='menu-list-3'
              fontSize='1rem'
              onSelect={item => console.log(`Selected ${item}`)}>
              {listItems.map(item => (
                <MenuList.Item id={item.id} key={item.id} value={item.name}>
                  {item.name}
                </MenuList.Item>
              ))}
            </MenuList>
          </Space>
        </Box>
      </Flex>
    </Space>
  )
}
;<MenuListExample />
```
