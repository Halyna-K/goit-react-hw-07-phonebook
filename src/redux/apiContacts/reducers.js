import { createReducer } from '@reduxjs/toolkit'
import { getContactRequest, getContactSuccess, getContactError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest,deleteContactSuccess, deleteContactError, filterValue } from "../apiContacts/actions";

export const contactsList = createReducer([], {
  [getContactSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, {payload}) => {
    return [...state, payload]},
  [deleteContactSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload ),
  [getContactError]: (_, action) => {},
})


export const loading = createReducer(false, {
  [getContactRequest]:(_, action)=> true,
  [getContactSuccess]:(_, action)=> false,
  [getContactError]:(_, action)=> false,

  [addContactRequest]:(_, action)=> true,
  [addContactSuccess]:(_, action)=> false,
  [addContactError]:(_, action)=> false,

  [deleteContactRequest]:(_, action)=> true,
  [deleteContactSuccess]:(_, action)=> false,
  [deleteContactError]:(_, action)=> false,
})

export const error = createReducer(null, {
  [getContactError]: (_, action) => action.payload,
})

export const contactFilter = createReducer ('', {
   [filterValue]: ( _, {payload}) => payload
})
