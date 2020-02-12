import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import constants from './../constants';
import Message from './Message';

const { initialState, types, firebaseConfig } = constants;

class MessageViewer extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseMessagesRef } = actions;
    dispatch(watchFirebaseMessagesRef());
  }
  render(){
    const messages = this.props.messages
    return (
      <div className='MessageViewer'>
        <style jsx>{`
          .MessageViewer {
            display: flex;
            justify-content: top;
            align-items: center;
            flex-direction: column;
            position: absolute;
            padding-top: 8vh;
            top:0px;
            left: 0px;
            height: 100vh;
            width: 100vw;
            background-color: rgba(100,0,150,1)
          }
          .message-list-display {
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            background: rgba(255,255,255,.2);
            width: 90%;
            max-height: 80vh;
            overflow-y: scroll;
          }
  
        `}</style>
        <h1>Messages</h1>
        <div className='message-list-display'>
          {
            Object.keys(messages).map((key)=>{
              let {isResolved, message, timeOpen, user, id} = messages[key];
              return <Message 
                isResolved={isResolved}
                message={message}
                timeOpen={timeOpen}
                user={user}
                id={id}
                key={id}
              />;
            })    
          }
        </div>
      </div>
    );
  }
}

MessageViewer.propTypes = {
  messages: PropTypes.object
};


const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MessageViewer);