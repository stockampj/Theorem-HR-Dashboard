import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';

const TestComponent = (props) => {

  return (
    <div className='TestComponent'>
      <style jsx>{`
        .TestComponent {
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
      <h1>Test Component: {props.testState}</h1>
    </div>
  );
};

TestComponent.propTypes = {
  testState: PropTypes.string
};


const mapStateToProps = (state) => {
  return {
    testState: state.testState
  };
};

export default connect(mapStateToProps)(TestComponent);