```js
import Image from '@ivoryio/kogaio/Image'
import { Flex, Space } from '@ivoryio/kogaio'
import Touchable from '@ivoryio/kogaio/Touchable'
import IconButton from '@ivoryio/kogaio/IconButton'

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
  src: 'https://www.ivory.io/static/logo-1ba65a72f395ca84702664a4bb7aa315.png'
}
;<Space px={2}>
  <TopBar
    height='56px'
    width={1}
    alignItems='center'
    justifyContent='space-between'>
    <Touchable>
      <Image
        src={logo.src}
        alt={logo.alt || 'Logo placeholder'}
        width={96}
        height='auto'
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
</Space>
```
