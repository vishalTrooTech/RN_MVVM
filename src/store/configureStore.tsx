import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './combineReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: getdefaultMiddleware =>
    getdefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
