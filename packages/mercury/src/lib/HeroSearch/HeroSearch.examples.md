```js
  import { Space } from '@ivoryio/kogaio/Responsive';
  const background = 'https://www.patseas.gr/wp-content/uploads/2015/01/second-rolex-banner-2.jpg';
    const _requestSearch = searchTerm => {
      console.info('I am searching for', searchTerm)
    };
    <HeroSearch
      subtitle='Feel free to explore and dare to make a change'
      title='Welcome to the bold and daring world of Mercury. This is a dummy title.'
      backgroundImage={background}
      onSearch={_requestSearch}
    />
```