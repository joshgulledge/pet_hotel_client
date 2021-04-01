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

  yield takeEvery('ADD_OWNER', addOwner)
}; // end rootSaga

function* addOwner(action) {
  try{
    yield axios.post('/api/owner/add', action.payload);

    yield put({type: 'FETCH_OWNER_LIST'});
  }
  catch (err) {
    console.log('Error adding owner.', err);
  }
} // end addOwner

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
