import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../actions';

function NewMessageForm(props){
  let _user = null;
  let _message = null;

  function handleNewMessageFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addMessage(_user.value, _message.value));
    _user.value = '';
    _message.value = '';
  };
  return (
    <div className="message-form">
      <style>{`
        .message-form {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          flex-direction: column;
          top:0px;
          left: 0px;
          height: 100vh;
          width: 100vw;
          background-color: rgba(50,100,0,1)
        }
        form {
          display: flex;
          flex-direction: column;
          justify: left;
        }
        .form-field {
          margin: 10px;
        }
      `}</style>
      <form onSubmit={handleNewMessageFormSubmission}>
        <input
          className='form-field'
          type='text'
          id='user'
          placeholder='user'
          ref={(input) => {_user = input;}}/>
        <textarea
          className='form-field'
          id='message'
          placeholder='message.'
          ref={(textarea) => {_message = textarea;}}/>
        <button className='form-field' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default connect()(NewMessageForm);