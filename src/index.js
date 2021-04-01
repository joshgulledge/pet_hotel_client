import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import App from './Components/App/App';

function* rootSaga (action) {
  yield takeEvery('FETCH_OWNER_LIST', fetchOwnerList)
}; // end rootSaga

function* fetchOwnerList () {
  try {
    const owners = yield axios.get('/api/owners/all');

    yield put({type: 'SET_OWNER_LIST', payload: owners.data})
  }
  catch (err) {
    console.log('something screwed up 💥', err);
  }
}

const ownerList = function (state = [], action) {
  switch (action.type) {
    case 'SET_OWNER_LIST':
      return action.payload;
    default:
      return state;
  }
}; // end ownerList

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
      ownerList,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
