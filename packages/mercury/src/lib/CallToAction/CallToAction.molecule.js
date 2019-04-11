import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, Button, Flex, themeGet, Space, Typography } from '@ivoryio/kogaio'

const CallToAction = ({
  background,
  button,
  children,
  subtitle,
  theme,
  title,
  ...props
}) => (
  <Flex position='relative' width={1} {...props}>
    <Container background={background} theme={theme}>
      {children || (
        <>
          <Box width={{ xs: 1, md: 3 / 4 }}>
            <Typography
              color='white'
              fontWeight={2}
              textAlign='center'
              textStyle='h2'
            >
              {title}
              <Typography
                color='white'
                fontWeight={0}
                textAlign='center'
                textStyle='caption'
              >
                {subtitle}
              </Typography>
            </Typography>
          </Box>
          <Space mt={{ xs: 6, sm: 5, lg: 8 }}>
            <Box width={1 / 2} textAlign='center'>
              <Button
                colors={button.variant === 'outline' && 'button-outline-dark'}
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
  /** button: { title: String, variant: String, onClick: func } */
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string
}

CallToAction.defaultProps = {
  button: {
    title: 'Press me',
    variant: 'outline',
    onClick: () => console.warn('Pass an onClick function to button')
  }
}

export default CallToAction
