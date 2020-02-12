import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import MessageToolsModal from './MessageToolsModal';

const Message = (props) => {
  const [messageShowStatus, setMessageShowStatus] = React.useState(false);

  let { isResolved, message, timeOpen, user, id } = props;
  let isResolvedText = (isResolved) ? 'resolved' : 'not-resolved';
  const limit = 30;
  let messageString = (message.length > limit) ? `${message.slice(0, limit)}...` : message;


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
          min-height: 50px;
          padding: 5px;
        }
        .message-display-user {
          display: flex;
          align-items: start;
          justify-content: left;
          width: 30%;
          min-width: 150px; 
        }
        .message-display-message-snippet {
          width: 60%;
          min-width: 150px;
        }
        .message-display-status {
          width: 10%;
          min-width: 100px;
        }

      `}</style>
      <div className='message-display-user' onClick={()=>{setMessageShowStatus(true)}}>{user}</div>
      <div className='message-display-message-snippet' onClick={()=>{setMessageShowStatus(true)}}>{messageString}</div>
      <div className='message-display-status' onClick={()=>{setMessageShowStatus(true)}}>{isResolvedText}</div>
      <MessageToolsModal 
        isResolved={isResolved}
        message={message}
        timeOpen={timeOpen}
        user={user}
        show = {messageShowStatus}
        onHide = {()=>setMessageShowStatus(false)}
        id={id}
      />
    </div>
  )
}

export default connect()(Message);