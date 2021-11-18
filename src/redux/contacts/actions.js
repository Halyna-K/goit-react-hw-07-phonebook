// import { v4 as uuid } from "uuid";
import { createAction } from '@reduxjs/toolkit';


//  export const addContact = createAction ('contact/add', contact => ({ payload:{
//          id: uuid(),
//          contact
//      }}));

export const addContact = createAction ('contact/add');

export const deleteContact = createAction ('contact/delete');

export const filterValue = createAction ('filter/value');


// export const addContact = contact => ({
//     type: 'contact/add',
//     payload: contact,
// });
// export const deleteContact = id => ({
//     type: 'contact/delete',
//     payload: {id},
// });
// export const filterValue = value => ({
//     type: 'filter/value',
//     payload: value,
// });
