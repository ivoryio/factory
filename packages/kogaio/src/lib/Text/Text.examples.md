#### H1
```js
  const message = 'Sphinx of black quartz, judge my vow';
  const TextExamples = () => (
    <>
      <Text
        fontWeight='bold'
        message={message}
        textStyle='h1'
      />
      <Text
        textStyle='h1'>
        {message}
      </Text>
    </>
);
  <TextExamples />
```

#### H2
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  const TextExamples = () => (
    <>
      <Text fontWeight='bold' message={message} textStyle='h2' />
      <Text textStyle='h2'>{message}</Text>
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
      <Text
        message={message}
        textStyle='h3'
        fontWeight='bold'
        letterSpacing={2}
      />
      <Text
        colors='info'
        letterSpacing={2}
        textStyle='h3'>
        {message}
      </Text>
    </>
    )
  }

  <TextExamples />
```

#### Paragraph
```js
  <>
    <Text textStyle='paragraph' fontWeight='bold'>
      Pack my box with five dozen liquor jugs.
    </Text>
    <Text textStyle='paragraph'>
      The quick brown fox jumps over the lazy dog.
    </Text>
      <Text textStyle='paragraph' color='#979ca6'>
      Sphinx of black quartz, judge my vow.
    </Text>
  </>
  
```