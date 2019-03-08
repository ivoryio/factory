#### Modal with header, footer and content
```js
const React = require('react')
const { useState } = React
const { default: styled } = require('styled-components')
const ModalExample1 = () => {
const [isModalShown, setModalShown] = useState(false)
const toggleModal = () => setModalShown(!isModalShown)
const confirmAction = () => {
  toggleModal()
  console.log('Success!')
}

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
`
const Header = styled.div`
  font-size: 1.8rem;
`
const FooterCmp = () => (
    <Footer> Footer Content </Footer>
  )
const HeaderCmp = () => (
    <Header>Header Content</Header>
  )
  return (
    <>
    <Button
      title='Show modal'
      border='1px solid #d3d3d3'
      onClick={toggleModal}
      variant='outline'
    />
      {isModalShown && (
        <Modal
          color='dark-gunmetal'
          cancelButtonLabel='Cancel Button'
          confirmButtonLabel='Confirm Button'
          confirmActionFn={confirmAction}
          display='flex'
          flexDirection='column'
          fontSize='1rem'
          hideModal={toggleModal}
          minWidth='25em'
          maxWidth='35em'
          minHeight='18em'
          maxHeight='25em'
          position='relative'
          Header={HeaderCmp}
          Footer={FooterCmp}
          width={{ xs: 1 / 2, md: 1 / 4 }}
        >
            This is a mocked message inside your modal. <br />
            Are you sure you wish to close this modal?
        </Modal>
      )}
    </>
  )
}
<ModalExample1 />
```

#### Modal with content only
```js
const React = require('react')

const { useState } = React
const ModalExample2 = () => {
const [isModalShown, setModalShown] = useState(false)
const toggleModal = () => setModalShown(!isModalShown)
const confirmAction = () => {
  toggleModal()
  console.log('Success!')
}
  return (
    <>
    <Button
      title='Show modal'
      border='1px solid #d3d3d3'
      onClick={toggleModal}
      variant='outline'
      />
      {isModalShown && (
        <Modal
          confirmActionFn={confirmAction}
          display='flex'
          flexDirection='column'
          fontSize='1rem'
          hideModal={toggleModal}
          minWidth='20em'
          maxWidth='35em'
          minHeight='12em'
          maxHeight='25em'
          position='relative'
          width={{ xs: 1 / 2, md: 1 / 3 }}
        >
            This is a modal with content inside your modal. <br />
            Click outside the box to close.
        </Modal>
      )}
    </>
  )
};
<ModalExample2 />
```