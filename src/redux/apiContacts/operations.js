import { getContactRequest, getContactSuccess, getContactError,addContactRequest, addContactSuccess, addContactError,deleteContactRequest,deleteContactSuccess, deleteContactError } from "./actions";
import api from "../../Services/api";

export const getFetchContacts = () => async dispatch => {
    dispatch(getContactRequest());
    try {
        const result = await api.fetchContacts();
        dispatch(getContactSuccess(result.data));
    } catch (err) {
        dispatch(getContactError(err))
    }
}

export const addContact = ({id, name, number}) => dispatch => {
     const contact = {id, name, number};
     dispatch(addContactRequest(contact))
     api.fetchAddContact(contact)
        .then(res => dispatch(addContactSuccess(res.data)))
        .catch( err => dispatch(addContactError(err)))
 }

export const deleteContact = (id) => dispatch => {
    dispatch(deleteContactRequest(id))
    api.fetchDeleteContact(id)
    .then(()=> dispatch(deleteContactSuccess(id)))
    .catch( err => dispatch(deleteContactError(err)))
}
