import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, Button, Flex, themeGet, Space } from '@ivoryio/kogaio'

const CallToAction = ({
  background,
  button,
  children,
  subtitle,
  theme,
  Title,
  ...props
}) => (
  <Flex position='relative' width={1} {...props}>
    <Container background={background} theme={theme}>
      {children || (
        <>
          <Space px={4}>
            <Box width={1}>{Title}</Box>
          </Space>
          <Space mt={{ xs: 8, sm: 6, lg: 12 }}>
            <Box width={1} textAlign='center'>
              <Button
                colors={button.colors}
                onClick={button.onClick}
                title={button.title}
                variant={button.variant}
                width={1}
                maxWidth='180px'
              />
            </Box>
          </Space>
        </>
      )}
    </Container>
  </Flex>
)

const addOverlay = ({ background, ...props }) => css`
  ${background
    ? themeGet('colorStyles.overlay')
    : `background-color: ${themeGet('colors.gunmetal')(props)}`};
`

const addBackgroundImage = ({ background }) => css`
  ${background &&
    `
      ::before {
        background-image: url(${background});
        background-size: cover;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
      }
  `};
`

const Container = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 0;
  ${addBackgroundImage}

  ::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    ${addOverlay}
  }
`

CallToAction.propTypes = {
  background: PropTypes.string,
  button: PropTypes.shape({
    colors: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    variant: PropTypes.string
  }),
  children: PropTypes.node,
  subtitle: PropTypes.string,
  theme: PropTypes.object,
  Title: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

CallToAction.defaultProps = {
  button: {
    colors: 'button-outline-dark',
    title: 'Press me',
    variant: 'outline',
    onClick: () => console.warn('* Pass an onClick function to button')
  }
}

export default CallToAction
