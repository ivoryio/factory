#### Button variants
```js
  const React = require('react')
  const { useState } = React
  const { default: styled } = require('styled-components')
  const Flex = require('../Responsive/Flex').default
  const Box = require('../Responsive/Box.js').default
  const Column = styled(Box)`
    display: flex;
    flex-direction: column;
  `
  const ButtonExample = () => {
    const [isLoading, setIsLoading] = useState(false)
    const toggleLoading = () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
    return (
      <Flex flexWrap='wrap' justifyContent='space-between' width={1}>
        <Column
          px='16px'
          my='4px'
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          Primary
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
            mt='5px'
            width='100%'
          />
        </Column>
        <Column
          px='16px'
          my='4px'
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          Outlined
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
            mt='5px'
            disabled
            width='100%'
          />
        </Column>
        <Column
          px='16px'
          my='4px'
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          Success
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            variant='validation'
            mr='16px'
            width='100%'
          />
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            variant='validation'
            mt='5px'
            disabled
            mr='16px'
            width='100%'
          />
        </Column>
        <Column
          px='16px'
          my='4px'
          width={{ xs: 1, sm: 1/2, md: 1/3 }}>
          Destructive
          <Button
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            variant='destructive'
            width='100%'
          />
          <Button
            border='solid 1px #699100'
            fontSize={['0.9rem', '1rem']}
            onClick={() => {}}
            title='Button Label'
            variant='destructive'
            mt='5px'
            disabled
            width='100%'
          />
        </Column>
        <Column
          px='16px'
          my='4px'
          width={{ xs: 1, sm: 1/2, md: 1/3 }}
        >
          Loading state
          <Button
            fontSize={['0.9rem', '1rem']}
            isLoading={isLoading}
            disabled={isLoading}
            onClick={toggleLoading}
            variant='primary'
            title='Submit'
            mr='16px'
            width='100%'
          />
        </Column>
      </Flex>
    )
  }
  <ButtonExample />
```
