#### H1
```js
  const message = 'Sphinx of black quartz, judge my vow';
  const TextExamples = () => (
    <>
      <Typography
        fontWeight='bold'
        message={message}
        variant='h1'
      />
      <Typography
        variant='h1'>
        {message}
      </Typography>
    </>
);
  <TextExamples />
```
#### H2
```js
  const message = 'The quick brown fox jumps over the lazy dog.';
  const TextExamples = () => (
    <>
      <Typography
        fontWeight='bold'
        message={message}
        variant='h2'
      />
      <Typography
        variant='h2'>
        {message}
      </Typography>
    </>
);
  <TextExamples />
```
#### H3
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  const TextExamples = () => {
    return (
    <>
      <Typography
        message={message}
        variant='h3'
        fontWeight='bold'
        letterSpacing={2}
      />
      <Typography
        colors='info'
        letterSpacing={2}
        variant='h3'>
        {message}
      </Typography>
    </>
    )
  }

  <TextExamples />
```

#### H4
```js
  const message = 'Sphinx of black quartz, judge my vow';
  const TextExamples = () => (
    <>
      <Typography fontWeight='bold' message={message} variant='h4' />
      <Typography variant='h4'>{message}</Typography>
    </>
  );
  <TextExamples />
```

#### H5
```js
  const message = 'The quick brown fox jumps over the lazy dog.';
  const TextExamples = () => (
    <>
      <Typography fontWeight='bold' message={message} variant='h5' />
      <Typography variant='h5'>{message}</Typography>
    </>
  );
  <TextExamples />
```

#### H6
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  const TextExamples = () => (
    <>
      <Typography fontWeight='bold' message={message} variant='h6' />
      <Typography variant='h6'>{message}</Typography>
    </>
  );
  <TextExamples />
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
      Sphinx of black quartz, judge my vow.
    </Typography>
  </>
  
```