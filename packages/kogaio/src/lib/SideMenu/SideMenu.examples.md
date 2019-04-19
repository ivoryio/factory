```js
const listItems = [
  { title: 'Menu Item 1', icon: 'person', onClick: () => console.log('First') },
  { title: 'Menu Item 2', icon: 'settings', onClick: () => console.log('Second') },
  { title: 'Menu Item 3', icon: 'power_settings_new', onClick: () => console.log('Third') }
];
  <SideMenu
    imgSrc='https://avatars0.githubusercontent.com/u/43787256?s=200&v=4'
    imgSize={64}
    list={listItems}
    minWidth='264px'
    title='Full name'
    subtitle='email@myemail.com'
    width={1/4}
  />
```