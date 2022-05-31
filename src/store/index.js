import { configureStore } from '@reduxjs/toolkit';
import exampleApiReducer from './reducers/exampleApiReducer';
import counterReducer from './reducers/exampleReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    exampleApi: exampleApiReducer,
  },
});
