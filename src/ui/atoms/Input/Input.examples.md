#### Simple Input
```js
function onChange(e) {
  console.log('Input Value Changed:', e.target.value)
}

<Input
  borderRadius={2}
  border='2px solid'
  onChange={onChange}
  p={1}
  type='text'
/>
```

#### Input with errors
```js
function onChange(e) {
  console.log('Input Value Changed:', e.target.value)
}

<Input
  onChange={onChange}
  borderRadius={2}
  border='2px solid red'
  error
  p={1}
  type='text'
/>
```