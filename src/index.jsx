import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

const render = (Component) => {

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <HashRouter>
          <Component />
        </HashRouter>
      </AppContainer>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable*/
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable*/