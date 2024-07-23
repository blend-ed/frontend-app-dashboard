import { Container } from '@openedx/paragon'
import  {useState} from 'react'
import ModalExample from './Modal/ModalExample'


function Modals() {
  const [modalState, setModalState] = useState(false);
  const [unenrollIds, setUnenrollIds] = useState(["uYLECJ50okpsbjH9","uYLECJ50okpsbjH9","uYLECJ50okpsbjH9"]);
  return (

      <Container className="mt-4">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=> setModalState(!modalState)}>Modal</button>
        <ModalExample modalState={modalState} setModalState={setModalState} students={unenrollIds.length} />
      </Container>

  )
}

export default Modals