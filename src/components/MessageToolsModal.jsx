import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MessageToolsModal = (props) => {
  let { isResolved, message, timeOpen, user, id, onHide, show } = props;
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="toolsModal"
        centered
      >
       <Modal.Header closeButton>
          <Modal.Title id="toolsModal">
            Message from {user}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
        <Modal.Footer>
          <button>mark as read</button>
          <button>resolve</button>
          <button onClick={()=>{onHide()}}>close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default connect()(MessageToolsModal);