```js
const { Space } = require('../Responsive');
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
const logo = {
  alt: 'Company Logo',
  src: 'https://www.ivory.io/static/logo-1ba65a72f395ca84702664a4bb7aa315.png',
  dimensions: [96, '100%']
};
  <TopBar
    color='white'
    bg='independence'
    icSize='1.5em'
    height='56px'
    width='50%'
    alignItems='center'
    justifyContent='space-between'
    >
     <Touchable>
        <Image
          src={logo.src}
          alt={logo.alt || 'Logo placeholder'}
          dimensions={logo.dimensions || [120, 40]}
        />
      </Touchable>
      <Flex>
        <Space p={2}>
          <IconButton
            color='pastel-blue'
            fontSize={3}
            name='shopping_cart'
            onClick={() => console.log('Clicked!')}
          />
        </Space>
        <Space p={2}>
          <IconButton
            color='pastel-blue'
            fontSize={3}
            name='account_circle'
            onClick={() => console.log('Clicked!')}
          />
        </Space>
        <Space p={2}>
          <IconButton
            color='pastel-blue'
            fontSize={3}
            name='exit_to_app'
            onClick={() => console.log('Clicked!')}
          />
        </Space>
      </Flex>
  </TopBar>
```