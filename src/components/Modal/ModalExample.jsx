import { Modal } from '@openedx/paragon'
import React from 'react'
import { Button } from '@openedx/paragon'

function ModalExample(props) {
  const { modalState, setModalState , students} = props;
  return (
    <Modal
    open={modalState}
    title="unEnroll students."
    body={`Are you sure you want to bulk unenroll ${students}`}
    buttons={[
      <Button
        variant="light"
        onClick={console.log('students unenrolled')}
      >
        Confirm Unenroll
      </Button>,
    ]}
    onClose={() => {setModalState(false)}}
  />
  )
}

export default ModalExample