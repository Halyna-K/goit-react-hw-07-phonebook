import { configureStore, getDefaultMiddleware,combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    // persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist"
// import storage from 'redux-persist/lib/storage'
// import  {contactsList, contactFilter } from "./contacts/reducers";

import { contactsList, contactFilter, loading, error } from './apiContacts/reducers';

// const apiContacts = combineReducers ({
//   contacts,
//   loading,
//   error
// })

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// }

const contactReducer = combineReducers({
    contacts: contactsList,
    filter: contactFilter,
    loading,
    error,
  });

// const persistedContactReducer = persistReducer(persistConfig, contactReducer);

const middleware = [...getDefaultMiddleware ({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
logger
];

const store = configureStore({
    reducer: contactReducer,
    // persistedContactReducer,
    // { contacts: persistedContactReducer,
      // apiContacts: apiContacts},
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})
// const persistor = persistStore (store);

export default store;
