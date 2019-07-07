#### Button variants

```js
import { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Space } from '@ivoryio/kogaio/Responsive'

const ButtonExamples = () => {
  const [loading, setLoading] = useState(false)
  const toggleLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  return (
    <Flex flexWrap='wrap' justifyContent='space-between' width={1}>
      <Space px={4} my={2}>
        <Flex
          flexDirection='column'
          color='lime'
          width={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}>
          <Button
            onClick={() => {}}
            variant='primary'
            title='Primary'
            width={1}
          />
          <Space mt={1}>
            <Button
              onClick={() => {}}
              variant='primary'
              title='Primary disabled'
              disabled
              width={1}
            />
          </Space>
        </Flex>
        <Flex flexDirection='column' width={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}>
          <Button
            onClick={() => {}}
            title='Outline'
            variant='outline'
            width={1}
          />
          <Space mt={1}>
            <Button
              onClick={() => {}}
              title='Outline disabled'
              variant='outline'
              disabled
              width={1}
            />
          </Space>
        </Flex>
        <Flex
          flexDirection='column'
          px={4}
          my={1}
          width={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}>
          <Space mr={4}>
            <Button
              onClick={() => {}}
              title='Validation'
              variant='validation'
              width={1}
            />
          </Space>
          <Space mt={1}>
            <Button
              onClick={() => {}}
              title='Destructive'
              variant='destructive'
              width={1}
            />
          </Space>
        </Flex>
        <Flex flexDirection='column' width={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}>
          <Button
            loading={loading}
            onClick={toggleLoading}
            variant='outline'
            title='Outline with loader'
            width={1}
          />
          <Space mt={1}>
            <Button
              icon={{ name: 'visibility', size: 16 }}
              onClick={() => {}}
              variant='outline'
              width={1}>
              Button with icon
            </Button>
          </Space>
        </Flex>
        <Flex flexDirection='column' width={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}>
          <Button
            onClick={() => {}}
            variant='outline'
            colors='button-outline-alt'
            title='Outline alt'
            width={1}
          />
          <Space p={2} mt={1}>
            <Box bg='gunmetal'>
              <Space mt={1}>
                <Button
                  onClick={() => {}}
                  title='Outline alt dark'
                  variant='outline'
                  colors='button-outline-dark'
                  width={1}
                />
              </Space>
            </Box>
          </Space>
        </Flex>
        <Box width={{ xs: 1, sm: 1 / 2, md: 1 / 3 }} />
      </Space>
    </Flex>
  )
}
;<ButtonExamples />
```
