import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';

const persistConfig = {
  key: 'root',
  //timeout: null,
  keyPrefix: '',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware({
  onError: err => console.warn('Error@Saga: ', err.message),
});
export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
