```js
function onChange(e) {
  console.log('Input Value Changed:', e.target.value)
}

<Input 
  type='text'
  onChange={onChange}
/>
```

```js
function onChange(e) {
  console.log('Input Value Changed:', e.target.value)
}

<Input 
  type='text'
  onChange={onChange}
  error
/>
```