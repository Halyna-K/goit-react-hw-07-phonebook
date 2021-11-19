import { createAction } from '@reduxjs/toolkit';

export const getContactRequest = createAction('getContacts/request');
export const getContactSuccess = createAction('getContacts/success');
export const getContactError = createAction('getContacts/error');

export const addContactRequest = createAction('addContacts/request');
export const addContactSuccess = createAction('addContacts/success');
export const addContactError = createAction('addContacts/error');

export const deleteContactRequest = createAction('deleteContacts/request');
export const deleteContactSuccess = createAction('deleteContacts/success');
export const deleteContactError = createAction('deleteContacts/error');

export const filterValue = createAction ('filter/value');
