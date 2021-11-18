import initialContacts from "../../dataBase/contacts.json";
import { addContact, deleteContact, filterValue} from './actions'
import { createReducer } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'


export const contactsList = createReducer(initialContacts, {
  [addContact]: (state, {payload}) => [...state, payload],
  [deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload )
})

export const contactFilter = createReducer ('', {
  [filterValue]: ( _, {payload}) => payload
})

// export const contactsList = (state = initialContacts, action) => {
//   switch (action.type) {
//     case 'contact/add':
//       return [...state, action.payload];
//     case 'contact/delete':
//       return state.filter(contact => contact.id !== action.payload.id);
//     default:
//       return state;
//   }
// };
// export const contactFilter = (state= '', action ) =>{
//   switch (action.type) {
//     case 'filter/value':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// export default contactReducer = combineReducers({contacts: contactsList, filter: contactFilter})
