#### Simple modal
```js
const React = require('react');
const { useState } = React;

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
            This is a mocked message inside your modal. <br />
            Are you sure you wish to close this modal?
        </Modal>
      )}
    </>
  )
};
<ModalExample2 />
```

#### Modal with custom header and footer
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
  font-size: 1rem;
`
const Header = styled.div`
  font-size: 1rem;
`

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
        Header={<Header>Custom Header</Header>}
        Footer={<Footer>Custom Footer</Footer>}
        width={{ xs: 1 / 2, md: 1 / 4 }}
      >
          This is a mocked message inside your modal. <br />
          Are you sure you wish to close this modal? <br />
          Also you can close it by clicking outside the box.
      </Modal>
    )}
  </>
)
}
<ModalExample1 />
```
