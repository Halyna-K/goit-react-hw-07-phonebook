import { createReducer } from '@reduxjs/toolkit'
import { getFetchContacts, addContact,deleteContact } from './operations'
import * as actions from "./actions";


export const contactsList = createReducer([], {
  [getFetchContacts.fulfilled]: (_, {payload}) => payload,

  [addContact.fulfilled]: (state, {payload}) => {return [...state, payload]},

  [deleteContact.fulfilled]: (state, {payload}) => state.filter(({id}) => id !== payload ),

  [getFetchContacts.rejected]: (_, action) => {},
})

export const loading = createReducer(false, {
  [getFetchContacts.pending]:(_, action)=> true,
  [getFetchContacts.fulfilled]:(_, action)=> false,
  [getFetchContacts.rejected]:(_, action)=> false,

  [addContact.pending]:(_, action)=> true,
  [addContact.fulfilled]:(_, action)=> false,
  [addContact.rejected]:(_, action)=> false,

  [deleteContact.pending]:(_, action)=> true,
  [deleteContact.fulfilled]:(_, action)=> false,
  [deleteContact.rejected]:(_, action)=> false,
})

export const error = createReducer(null, {
  [getFetchContacts.rejected]: (_, action) => action.payload,
  [getFetchContacts.pending]:()=> null,
})

export const contactFilter = createReducer ('', {
   [actions.filterValue]: ( _, {payload}) => payload
})

// export const contactsList = createReducer([], {
//   [actions.getContactSuccess]: (_, {payload}) => payload,
//   [actions.addContactSuccess]: (state, {payload}) => {return [...state, payload]},
//   [actions.deleteContactSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload ),
//   [actions.getContactError]: (_, action) => {},
// })


// export const loading = createReducer(false, {
//   [actions.getContactRequest]:(_, action)=> true,
//   [actions.getContactSuccess]:(_, action)=> false,
//   [actions.getContactError]:(_, action)=> false,

//   [actions.addContactRequest]:(_, action)=> true,
//   [actions.addContactSuccess]:(_, action)=> false,
//   [actions.addContactError]:(_, action)=> false,

//   [actions.deleteContactRequest]:(_, action)=> true,
//   [actions.deleteContactSuccess]:(_, action)=> false,
//   [actions.deleteContactError]:(_, action)=> false,
// })

// export const error = createReducer(null, {
//   [actions.getContactError]: (_, action) => action.payload,
//   [actions.getContactRequest]:()=> null,
// })

// export const contactFilter = createReducer ('', {
//    [actions.filterValue]: ( _, {payload}) => payload
// })
