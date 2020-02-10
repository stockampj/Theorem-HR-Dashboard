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
    <div>
      <form onSubmit={handleNewMessageFormSubmission}>
        <input
          type='text'
          id='user'
          placeholder='user'
          ref={(input) => {_user = input;}}/>
        <textarea
          id='message'
          placeholder='message.'
          ref={(textarea) => {_message = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default connect()(NewMessageForm);