#### Modal with content
```js
const React = require('react')
const { useState } = React
const ModalExample1 = () => {
const [isModalShown, setModalShown] = useState(false)
const toggleModal = () => setModalShown(!isModalShown)
const confirmAction = () => {
  toggleModal()
  console.log('Success!')
}
const modalContent = {
  fontSize: '1rem'
}
  return (
    <>
    <Button
      title='Show modal'
      border='1px solid #d3d3d3'
      onClick={toggleModal}
      variant='outlined'
    />
      {isModalShown && (
        <Modal
          headerLabel="Modal example"
          confirmBtnLabel="Confirm"
          confirmActionFn={confirmAction}
          confirmButtonType='success'
          hideModal={toggleModal}
        >
          <div style={modalContent}>
            This is a mocked message inside your modal. <br />
            Are you sure you wish to close this modal?
          </div>
        </Modal>
      )}
    </>
  )
}
<ModalExample1 />
```

#### Modal with custom header and footer
```js
const React = require('react')
const { default: styled } = require('styled-components')

const { useState } = React
const ModalExample2 = () => {
const [isModalShown, setModalShown] = useState(false)
const toggleModal = () => setModalShown(!isModalShown)
const confirmAction = () => {
  toggleModal()
  console.log('Success!')
}
const modalContent = {
  fontSize: '1rem'
}
const StyledHeader = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: space-between;
  padding: 15px 10px;
  border-block-end: 1px solid #e5e5e5;
`
const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-block-start: 1px solid #e5e5e5;
  padding: 10px 0;
  max-width: 100%;
`
const CustomHeader = () => <StyledHeader>Hi, this is my custom header</StyledHeader>
const CustomFooter = () => <StyledFooter>Goodbye from the custom footer.</StyledFooter>
  return (
    <>
    <Button
      title='Show modal'
      border='1px solid #d3d3d3'
      onClick={toggleModal}
      variant='outlined'
      />
      {isModalShown && (
        <Modal
          CustomHeader={CustomHeader}
          CustomFooter={CustomFooter}
          headerLabel="Modal example"
          confirmBtnLabel="Confirm"
          confirmActionFn={confirmAction}
          hideModal={toggleModal}
        >
          <div style={modalContent}>
            This is some sophisticated content inside your modal. <br />
            Click outside the box to close.
          </div>
        </Modal>
      )}
    </>
  )
};
<ModalExample2 />
```