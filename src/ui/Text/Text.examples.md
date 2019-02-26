#### Paragraph
```js
const message = 'Pack my box with five dozen liquor jugs.';
<Text message={message} color='#3498db' />
```

#### H3
```js
const message = 'The quick brown fox jumps over the lazy dog.';
const TextExamples = () => {
  return (
  <div>
    <Text message={message} textStyle='h3' color='#656565' 
    letterSpacing={2} />
    <Text message={message} textStyle='h3' color='#656565' fontWeight={900} letterSpacing={2} />
  </div>
  )
}

  <TextExamples />
```

#### H2
```js
const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
const TextExamples = () => {
  return (
    <div>
      <Text message={message} textStyle='h2' color='#484848' opacity={.75}/>
      <Text message={message} textStyle='h2' color='#484848' fontWeight={900} opacity={.75}/>
    </div>
  )
}
<TextExamples />
```
#### H1
```js
const message = 'Hey, I am a H1';
const TextExamples = () => {
  return (
    <div>
      <Text message={message} textStyle='h1' color='#484848' opacity={.75} />
      <Text message={message} textStyle='h1' color='#484848' opacity={.75} fontWeight={900} />
    </div>
  )
}
<TextExamples />
```