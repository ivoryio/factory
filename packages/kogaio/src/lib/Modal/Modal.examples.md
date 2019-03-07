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
  padding-block-end: 10px;
  font-size: 1.8rem;
  color: #484848;
`
const Header = styled.div`
  font-size: 1.8rem;
  color: #484848;
`
  const FooterCmp = () => {
      return (
        <Footer> Footer Content </Footer>
      )
  }
  const HeaderCmp = () => {
    return (
      <Header>Header Content</Header>
    )
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
          cancelBtnLavel='Cancel'
          confirmBtnLabel='Confirm'
          confirmActionFn={confirmAction}
          confirmButtonType='success'
          hideModal={toggleModal}
          Header={HeaderCmp}
          Footer={FooterCmp}
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

#### Modal with only content
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
      variant='outlined'
      />
      {isModalShown && (
        <Modal
          confirmActionFn={confirmAction}
          confirmButtonType='success'
          hideModal={toggleModal}
        >
            This is some sophisticated content inside your modal. <br />
            Click outside the box to close.
        </Modal>
      )}
    </>
  )
};
<ModalExample2 />
```