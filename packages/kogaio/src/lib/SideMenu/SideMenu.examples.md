```js
const images = require('../assets/images').default;
const listItems = [
  { title: 'Menu Item 1', icon: 'person', onClick: () => console.log('First') },
  { title: 'Menu Item 2', icon: 'settings', onClick: () => console.log('Second') },
  { title: 'Menu Item 3', icon: 'power_settings_new', onClick: () => console.log('Third') }
];
  <SideMenu
    imgSrc={images.ivoryLogo}
    imgSize={[64]}
    list={listItems}
    minWidth='264px'
    title='Full name'
    subtitle='email@myemail.com'
    width={1/4}
  />
```