import { getContactRequest, getContactSuccess, getContactError,addContactRequest, addContactSuccess, addContactError,deleteContactRequest,deleteContactSuccess, deleteContactError } from "../apiContacts/actions";
import api from "../../Services/api";

export const getContacts = () => dispatch => {
    dispatch(getContactRequest());
     api.fetchContacts()
        .then(res => dispatch(getContactSuccess(res.data)))
        .catch (err => dispatch(getContactError(err)))
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
