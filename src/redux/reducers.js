// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, setFilter } from "./actions";

// const contactsInitialState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
// // export const contactReducer = (state = contactsInitialState, action) => {
// //   switch (action.type) {
// //     case "contacts/addContact":
// //       return [...state, action.payload];

// //     case "contacts/deleteContact":
// //       return state.filter((contact) => contact.id !== action.payload);

// //     default:
// //       return state;
// //   }
// // };

// export const contactReducer = createReducer(contactsInitialState, (builder) => {
//   builder
//     .addCase(addContact, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteContact, (state, action) =>
//       state.filter((contact) => contact.id !== action.payload)
//     );
// });

// // export const filterReducer = (state = filterInitialState, action) => {
// //   switch (action.type) {
// //     case "filter/setFilter":
// //       return action.payload;

// //     default:
// //       return state;
// //   }
// // };
// const filterInitialState = "";

// export const filterReducer = createReducer(filterInitialState, (builder) => {
//   builder.addCase(setFilter, (state, action) => action.payload);
// });
