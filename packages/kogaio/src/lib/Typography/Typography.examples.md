#### H1
```js
  const message = 'Sphinx of black quartz, judge my vow!';
  <>
    <Typography fontWeight={2} variant='h1'>{message}</Typography>
    <Typography variant='h1'>{message}</Typography>
  </>
```
#### H2
```js
  const message = 'The quick brown fox jumps over the lazy dog.';
  <>
    <Typography fontWeight={2} variant='h2'>{message}</Typography>
    <Typography variant='h2'>{message}</Typography>
  </>
```
#### H3
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  <>
    <Typography variant='h3' fontWeight={2}>{message}</Typography>
    <Typography colors='info' variant='h3'>{message}</Typography>
  </>
```

#### H4
```js
  const message = 'Sphinx of black quartz, judge my vow!';
  <>
    <Typography fontWeight='bold' variant='h4'>{message}</Typography>
    <Typography variant='h4'>{message}</Typography>
  </>
```

#### H5
```js
  const message = 'The quick brown fox jumps over the lazy dog.';
  <>
    <Typography fontWeight='bold' variant='h5'>{message}</Typography>
    <Typography variant='h5'>{message}</Typography>
  </>
```

#### H6
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  <>
    <Typography fontWeight='bold' variant='h6'>{message}</Typography>
    <Typography variant='h6'>{message}</Typography>
  </>
```

#### Paragraph
```js
  <>
    <Typography as='p' fontWeight='bold' variant='paragraph'>
      Pack my box with five dozen liquor jugs.
    </Typography>
    <Typography as='p' variant='paragraph'>
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography  color='manatee' as='p' variant='paragraph'>
      Sphinx of black quartz, judge my vow!
    </Typography>
  </>
  
```