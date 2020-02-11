import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';

const Message = (props) => {
  let { isResolved, message, timeOpen, user, id } = props;
  let isResolvedText = (isResolved) ? 'resolved' : 'not-resolved';
  return (
    <div className='message-holder' id={id}>
      <style>{`
        .message-holder {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: top;
          width: 100%;
          max-height: 60px;
          border: solid thin black;
          overflow: hidden;
        }
        .message-holder div{
          display: flex;
          align-items: start;
          justify-content: left;
          min-height: 50px;
          padding: 5px;
        }
        .message-display-user {
          width: 30%;
          min-width: 150px; 
        }
        .message-display-message {
          width: 60%;
          min-width: 150px; 
        }
        .message-display-status {
          width: 10%;
          min-width: 100px;
        }
      `}</style>
      <div className='message-display-user'>{user}</div>
      <div className='message-display-message'>{message}</div>
      <div className='message-display-status'>{isResolvedText}</div>
    </div>
  )
}

export default connect()(Message);