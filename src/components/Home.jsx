import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';


const Home = ({testState}) => {
  return (
    <div className='Home'>
      <style jsx>{`
        .Home {
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

      `}</style>
      <h1>Home</h1>
      <p>{testState}</p>
    </div>
  );
};

Home.propTypes = {
  testState: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    testState: state.testState
  };
};





export default connect(mapStateToProps)(Home);