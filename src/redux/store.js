// import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware,combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import  {contactsList, contactFilter } from "./contacts/reducers";

// export const store = createStore(contactReducer,composeWithDevTools());

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}
const contactReducer = combineReducers({
    contacts: contactsList,
    filter: contactFilter,
  });

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

const middleware = [...getDefaultMiddleware ({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}), logger ];

const store = configureStore({
    reducer: persistedContactReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})
const persistor = persistStore (store);

export default { store, persistor }
