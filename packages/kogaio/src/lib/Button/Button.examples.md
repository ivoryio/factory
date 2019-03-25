#### Button variants
```js
  const React = require('react');
  const { useState } = React;
  const { default: styled } = require('styled-components');

  const ButtonExamples = () => {
    const [isLoading, setIsLoading] = useState(false)
    const toggleLoading = () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
    return (
      <Flex flexWrap='wrap' justifyContent='space-between' width={1}>
        <Flex
          flexDirection='column'
          px={3}
          my={1}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            variant='primary'
            title='Button Label'
            width='100%'
          />
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            variant='primary'
            title='Button Label'
            disabled
            mt={1}
            width='100%'
          />
        </Flex>
        <Flex
          flexDirection='column'
          px={3}
          my={1}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            variant='outline'
            width='100%'
          />
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            variant='outline'
            mt={1}
            disabled
            width='100%'
          />
        </Flex>
        <Flex
          flexDirection='column'
          px={3}
          my={1}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            variant='validation'
            mr={3}
            width='100%'
          />
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            mt={1}
            variant='destructive'
            width='100%'
          />
        </Flex>
        <Flex
          flexDirection='column'
          px={3}
          my={1}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            fontSize={['0.9rem', '1rem']}
            isLoading={isLoading}
            onClick={toggleLoading}
            variant='outline'
            title='Click me'
            width='100%'
          />
           <Button
            fontSize={['0.9rem', '1rem']}
            icon={{ name: 'visibility', size: 16 }}
            mt={1}
            onClick={() => {}}
            title='Button Label'
            variant='outline'
            width='100%'
          />
        </Flex>
      </Flex>
    )
  }
  <ButtonExamples />
```
