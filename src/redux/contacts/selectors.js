import { createSelector } from "@reduxjs/toolkit";

import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const regexp = /\D/g;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        contact.number.replace(regexp, "").includes(filter.trim())
    );
  }
);
