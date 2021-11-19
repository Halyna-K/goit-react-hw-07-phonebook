import { createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../Services/api";
// import * as actions from "./actions";


export const getFetchContacts = createAsyncThunk( 'contacts/fetchContacts',
    async () => {
      const response = await api.fetchContacts();
      return response.data
    }
)
export const addContact = createAsyncThunk('contacts/addContact',
    async (contact) => {
        const response = await api.fetchAddContact(contact)
        return response.data
})

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id) => {
        const response = await api.fetchDeleteContact(id)
        return response.data.id
})

// export const filterValue = createAsyncThunk('filter/value',
//     async () => { return })


// export const getFetchContacts = () => async dispatch => {
//     dispatch(actions.getContactRequest());
//     try {
//         const result = await api.fetchContacts();
//         dispatch(actions.getContactSuccess(result.data));
//     } catch (err) {
//         dispatch(actions.getContactError(err))
//     }
// }

// export const addContact = ({id, name, number}) => dispatch => {
//      const contact = {id, name, number};
//      dispatch(actions.addContactRequest(contact))
//      api.fetchAddContact(contact)
//         .then(res => dispatch(actions.addContactSuccess(res.data)))
//         .catch( err => dispatch(actions.addContactError(err)))
//  }

// export const deleteContact = (id) => dispatch => {
//     dispatch(actions.deleteContactRequest(id))
//     api.fetchDeleteContact(id)
//     .then(()=> dispatch(actions.deleteContactSuccess(id)))
//     .catch( err => dispatch(actions.deleteContactError(err)))
// }
