#### Paragraph
```js
const message = 'Pack my box with five dozen liquor jugs.';
<Text textStyle='paragraph'>{message}</Text>
```

#### H3
```js
const message = 'The quick brown fox jumps over the lazy dog.';
const TextExamples = () => {
  return (
  <>
    <Text
      colors='info'
      letterSpacing={2}
      textStyle='h3'>
      {message}
    </Text>
    <Text
      message={message}
      textStyle='h3'
      fontWeight='bold'
      letterSpacing={2}
    />
  </>
  )
}

  <TextExamples />
```

#### H2
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  const TextExamples = () => (
    <>
      <Text opacity={.75} textStyle='h2'>{message}</Text>
      <Text fontWeight='bold' message={message} opacity={.75} textStyle='h2' />
    </>
  );
<TextExamples />
```

#### H1
```js
  const message = 'Hey, I am a H1';
  const TextExamples = () => (
    <div>
      <Text
        opacity={.75}
        textStyle='h1'>
        {message}
      </Text>
      <Text
        fontWeight='bold'
        message={message}
        opacity={.75}
        textStyle='h1'
      />
    </div>
);
<TextExamples />
```