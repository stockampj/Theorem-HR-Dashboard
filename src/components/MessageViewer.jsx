import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import constants from './../constants';
const { initialState, types, firebaseConfig } = constants;

class MessageViewer extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseMessagesRef } = actions;
    dispatch(watchFirebaseMessagesRef());
  }

  render(){
    return (
      <div className='MessageViewer'>
        <style jsx>{`
          .MessageViewer {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top:0px;
            left: 0px;
            height: 100vh;
            width: 100vw;
            background-color: rgba(100,0,150,1)
          }
  
        `}</style>
        <h1>Test Component</h1>
      </div>
    );
  }
}



MessageViewer.propTypes = {
  testState: PropTypes.string
};


const mapStateToProps = (state) => {
  return {
    testState: state.testState
  };
};

export default connect(mapStateToProps)(MessageViewer);