import { createStore } from 'redux';
import rootReducer from './reducers'; 

const store = createStore(rootReducer); // create the store with your root reducer

export default store;
