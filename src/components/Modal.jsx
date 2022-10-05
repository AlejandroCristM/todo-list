import ReactDOM from 'react-dom';
import "../style/Modal.css";

function Modal({children}) {
  return ReactDOM.createPortal(
    <div className='ModalBg'>
      {children} 
    </div>,
    document.getElementById('modal')
  )
}

export {Modal}


