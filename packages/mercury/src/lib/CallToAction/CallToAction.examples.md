```js
  import Typography from '@ivoryio/kogaio/Typography';
  import { Flex, Space } from '@ivoryio/kogaio/Responsive';
  const mockClick = () => console.info("Hello, I've been expecting you.");
  const ActionTitle = () => (
    <Typography
      color='white'
      fontWeight={2}
      textAlign='center'
      textStyle='h2'>
        Call-to-Action that expects props. <br />
        <Space mt={1}>
        <Typography color='white'>Expand the section above to see the available props</Typography>
        </Space>
    </Typography>
  );
  <Space py={{ xs: 8, md: 11, lg: 9 }}>
    <CallToAction
      background='https://www.omegawatches.com/media/gene-cms/h/o/home_se300m-21032422006001-large_12.jpg'
      button={{ title: 'Take me there', colors: 'button-outline-dark', variant: 'outline', onClick: mockClick }}
      Title={<ActionTitle />}
    />
  </Space>
```

```js
  import Button from '@ivoryio/kogaio/Button';
  import Typography from '@ivoryio/kogaio/Typography';
  import { Box, Flex, Space } from '@ivoryio/kogaio/Responsive';
  const backgroundImage='http://www.luxurybazaar.com/wp/wp-content/uploads/2018/05/homebanner4-700x210.jpg';
  <Space mt={6} px={4} py={{ xs: 5, md: 6, lg: 3 }}>
    <CallToAction>
      <Flex alignItems='center' flexWrap='wrap' width={1}>
        <Box width={{ xs: 1, md: 2 / 3 }}>
          <Typography
            color='white'
            fontWeight={2}
            textAlign='center'
            textStyle='subtitle'
          >
            Start your 30-day free trial today. Cancel or upgrade anytime.
          </Typography>
        </Box>
        <Space mt={{ xs: 4, md: 0 }}>
          <Box width={{ xs: 1, md: 1 / 3 }} textAlign='center'>
            <Button
              onClick={() => {}}
              title='Claim'
              variant='primary'
              width={1}
              maxWidth='212px'
            />
          </Box>
        </Space>
      </Flex>
    </CallToAction>
  </Space>
```