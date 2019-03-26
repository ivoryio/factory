#### H1
```js
  const message = 'Sphinx of black quartz, judge my vow';
  const TextExamples = () => (
    <>
      <Typography
        fontWeight='bold'
        message={message}
        textStyle='h1'
      />
      <Typography
        textStyle='h1'>
        {message}
      </Typography>
    </>
);
  <TextExamples />
```

#### H3
```js
  const message = 'The quick brown fox jumps over the lazy dog.';
  const TextExamples = () => {
    return (
    <>
      <Typography
        message={message}
        textStyle='h3'
        fontWeight='bold'
        letterSpacing={2}
      />
      <Typography
        colors='info'
        letterSpacing={2}
        textStyle='h3'>
        {message}
      </Typography>
    </>
    )
  }

  <TextExamples />
```

#### H4
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  const TextExamples = () => (
    <>
      <Typography fontWeight='bold' message={message} textStyle='h4' />
      <Typography textStyle='h4'>{message}</Typography>
    </>
  );
  <TextExamples />
```

#### H5
```js
  const message = 'Sphinx of black quartz, judge my vow';
  const TextExamples = () => (
    <>
      <Typography fontWeight='bold' message={message} textStyle='h5' />
      <Typography textStyle='h5'>{message}</Typography>
    </>
  );
  <TextExamples />
```

#### H6
```js
  const message = 'The quick brown fox jumps over the lazy dog.';
  const TextExamples = () => (
    <>
      <Typography fontWeight='bold' message={message} textStyle='h6' />
      <Typography textStyle='h6'>{message}</Typography>
    </>
  );
  <TextExamples />
```

#### Paragraph
```js
  <>
    <Typography component='p' fontWeight='bold' textStyle='paragraph'>
      Pack my box with five dozen liquor jugs.
    </Typography>
    <Typography component='p' textStyle='paragraph'>
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography  color='manatee' component='p' textStyle='paragraph'>
      Sphinx of black quartz, judge my vow.
    </Typography>
  </>
  
```