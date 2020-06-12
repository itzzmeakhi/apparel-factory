import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';
// import { fetchCollectionsStart } from './../redux/shop/shop.sagas';
//import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

// const middleWares = [thunk];

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

