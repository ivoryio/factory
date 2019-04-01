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
          px={4}
          my={1}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            onClick={() => {}}
            variant='primary'
            title='Primary'
            width='100%'
          />
          <Button
            onClick={() => {}}
            variant='primary'
            title='Primary disabled'
            disabled
            mt={1}
            width='100%'
          />
        </Flex>
        <Flex
          flexDirection='column'
          px={4}
          my={1}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            onClick={() => {}}
            title='Outline'
            variant='outline'
            width='100%'
          />
          <Button
            onClick={() => {}}
            title='Outline disabled'
            variant='outline'
            mt={1}
            disabled
            width='100%'
          />
        </Flex>
        <Flex
          flexDirection='column'
          px={4}
          my={1}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            onClick={() => {}}
            title='Validation'
            variant='validation'
            mr={4}
            width='100%'
          />
          <Button
            onClick={() => {}}
            title='Destructive'
            mt={1}
            variant='destructive'
            width='100%'
          />
        </Flex>
        <Flex
          flexDirection='column'
          px={4}
          my={2}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          <Button
            isLoading={isLoading}
            onClick={toggleLoading}
            variant='outline'
            title='Outline with loader'
            width='100%'
          />
           <Button
            icon={{ name: 'visibility', size: 16 }}
            mt={1}
            onClick={() => {}}
            title='Button with icon'
            variant='outline'
            width='100%'
          />
        </Flex>
        <Flex 
          flexDirection='column'
          px={4}
          my={2}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
        <Button
          onClick={() => {}}
          variant='outline'
          colors='button-outline-alt'
          title='Outline alt'
          width='100%'
        />
          <Box bg='gunmetal' p={2} mt={1}>
            <Button
              mt={1}
              onClick={() => {}}
              title='Outline alt dark'
              variant='outline'
              colors='button-outline-dark'
              width='100%'
            />
          </Box>
        </Flex>
        <Flex
          flexDirection='column'
          px={4}
          my={2}
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        />
      </Flex>
    )
  }
  <ButtonExamples />
```
