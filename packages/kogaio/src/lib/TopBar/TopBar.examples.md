```js
import { Flex, IconButton, Image, Space, Touchable } from '../';
const iconButtons = [
  {
    id: 'cart',
    iconName: 'shopping_cart'
  },
  {
    id: 'profile',
    iconName: 'account_circle'
  },
  {
    id: 'logout',
    iconName: 'exit_to_app'
  }
]
const logo = {
  alt: 'Company Logo',
  src: 'https://www.ivory.io/static/logo-1ba65a72f395ca84702664a4bb7aa315.png',
  dimensions: [96, 'auto']
};
  <TopBar
    height='56px'
    px={2}
    width={1}
    alignItems='center'
    justifyContent='space-between'
    >
     <Touchable>
        <Image
          src={logo.src}
          alt={logo.alt || 'Logo placeholder'}
          dimensions={logo.dimensions || [120, 40]}
          objectFit='contain'
        />
      </Touchable>
      <Flex>
        {iconButtons.map(iconBtn => {
          const { id, iconName } = iconBtn
          return (
            <Space key={id} p={2}>
              <IconButton
                color='pastel-blue'
                fontSize={3}
                name={iconName}
                onClick={() => console.log(`${id} clicked!`)}
              />
            </Space>
          )
        })}
      </Flex>
  </TopBar>
```