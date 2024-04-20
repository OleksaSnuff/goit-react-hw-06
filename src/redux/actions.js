// import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// // export const addContact = (contact) => {
// //   return {
// //     type: "contacts/addContact",
// //     payload: { id: nanoid(), ...contact },
// //   };
// // };

// export const addContact = createAction("contacts/addContact", (contact) => {
//   return { payload: { id: nanoid(), ...contact } };
// });

// // export const deleteContact = (contactId) => {
// //   return {
// //     type: "contacts/deleteContact",
// //     payload: contactId,
// //   };
// // };

// export const deleteContact = createAction("contacts/deleteContact");

// // export const setFilter = (filter) => {
// //   return {
// //     type: "filter/setFilter",
// //     payload: filter,
// //   };
// // };

// export const setFilter = createAction("filter/setFilter");
