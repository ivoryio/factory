#### Simple modal
```js
import { useState } from 'react';
import Button from '@ivoryio/kogaio/Button';
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
      onClick={toggleModal}
      variant='outline'
      />
      {isModalShown && (
        <Modal
          confirmActionFn={confirmAction}
          display='flex'
          flexDirection='column'
          fontSize='1em'
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
import { useState } from 'react';
import styled from 'styled-components';
import Button from '@ivoryio/kogaio/Button';

const ModalExample1 = () => {
const [isModalShown, setModalShown] = useState(false)
const toggleModal = () => setModalShown(!isModalShown)
const confirmAction = () => {
  toggleModal()
  console.log('Success!')
}

const Header = styled.div`
  font-size: 1em;
`
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1em;
`

return (
  <>
  <Button
    title='Show modal'
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
        fontSize='1em'
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
