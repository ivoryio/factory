import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Flex,
  Input,
  Space,
  themeGet,
  Typography
} from '@ivoryio/kogaio'
import styled from 'styled-components'

const HeroSearch = ({
  backgroundImage,
  button,
  onSearch: requestSearch,
  subtitle,
  title,
  theme,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const _handleValueChange = ev => setSearchTerm(ev.target.value)
  const _search = ev => {
    if (!searchTerm.length) {
      return ev.preventDefault()
    }
    requestSearch(searchTerm)
  }
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      position='relative'
      width={1}
      {...props}
    >
      <Container backgroundImage={backgroundImage} theme={theme}>
        <Space px={6}>
          <Box width={1}>
            <Typography
              color='white'
              fontSize={{ xs: '1.625em', md: '2em' }}
              fontWeight={2}
              textAlign='center'
              textStyle='h2'
            >
              {title}
            </Typography>
          </Box>
        </Space>
        <Space mt={6}>
          <Flex flexWrap='wrap' justifyContent='center' width={1}>
            <Box width={{ xs: 1, sm: 3 / 4, md: 2 / 3 }}>
              <Typography
                color='white'
                fontWeight={2}
                textAlign='center'
                textStyle='h3'
              >
                {subtitle}
              </Typography>
            </Box>
            <Space mt={4}>
              <Flex
                flexWrap='wrap'
                width={{ xs: 1, md: 1, lg: 3 / 4 }}
                maxWidth='760px'
              >
                <Space px={1}>
                  <Box width={{ xs: 1, md: 2 / 3 }}>
                    <Input
                      onChange={_handleValueChange}
                      placeholder='Search...'
                      value={searchTerm}
                    />
                  </Box>
                  <Box width={{ xs: 1, md: 1 / 3 }}>
                    <Button
                      title={button.title}
                      height='36px'
                      onClick={_search}
                      variant={button.variant}
                      width={1}
                    />
                  </Box>
                </Space>
              </Flex>
            </Space>
          </Flex>
        </Space>
      </Container>
    </Flex>
  )
}

const Container = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 0;

  ::before {
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-position: center;
    background-size: cover;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    ${themeGet('colorStyles.overlay')};
  }
`

HeroSearch.propTypes = {
  backgroundImage: PropTypes.string,
  /** button: { title: String, variant: String['primary', 'destructive', 'outline', 'validation'] } */
  button: PropTypes.object,
  children: PropTypes.node,
  onSearch: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  theme: PropTypes.object,
  title: PropTypes.string
}

HeroSearch.defaultProps = {
  button: {
    title: 'Search',
    variant: 'primary'
  }
}

export default HeroSearch
