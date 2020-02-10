import React from 'react';
import { connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { changeState1, changeState2 } from '../actions';
import PropTypes from 'prop-types';

const NavBar = (props) => {

  const {testState, dispatch} = props;
  // dispatch()
  let handleTestClick = () => {
    if (testState !== 'Huzzah'){
      dispatch(changeState1('Huzzah'));
    } else {
      dispatch(changeState2('Wonga'));
    }
  };

  return (
    <div>
      <style jsx>{`
        .top-nav-row {
          position: fixed;
          top: 0px;
          left:0px;
          height: 40px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          z-index: 1;
          background-color: rgba(255,255,255, .2);
          border-bottom: solid 1px rgba(255, 255, 255, 0.2);
          -webkit-box-shadow: 4px 5px 5px -3px #000000; 
          box-shadow: 4px 5px 5px -3px #000000;
          color: white;
        }
        
        .home-button {
          border-radius: 0%;
          font-weight: 800;
          height: 40px;
          color:  rgba(244,230,187,.8);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);    
          border: none;
          font-family: 'UnifrakturCook', cursive;
        }
         
        .home-button:hover {
          background: rgba(255,255,255, .1);
          color:  rgba(244,230,187,1);
          border-right: solid 1px rgba(255, 255, 255, 0.2);
        }
        
        .fas {
          font-size: 1.5em;
        }
        .btn-text {
          font-family: 'sans-serif'
        }

        .nav-cluster {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
        }
        .nav-item {
          color: rgba(255,255,255,.8);
          font-weight: 600;
          margin-right: 10px;
        }
        .nav-item:hover {
          color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,.1);
        }
      `}</style>
      <div className='top-nav-row'>
        <div className='nav-cluster'>
          <Link className='btn home-button' to='/'><span className="btn-text">Home</span></Link>
          <Link className='btn nav-item' to="/testPath">testLink</Link>
        </div>
        <div className='nav-cluster'>
          <button className='btn nav-item' onClick={()=>{handleTestClick();}}>click me now</button>
          <button className='btn nav-item'>Useless Button: {testState}</button>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  dispatch: PropTypes.func,
  testState: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    testState: state.testState
  };
};

export default connect(mapStateToProps)(NavBar);