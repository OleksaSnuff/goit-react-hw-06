import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (contactsList, filter) => {
  if (contactsList.length === 0) return [];
  return contactsList.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase().trim());
  });
};

const ContactList = () => {
  const contactsList = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contactsList, filter);

  return (
    <div>
      <ul className={css["users-list"]}>
        {visibleContacts.length !== 0 ? (
          visibleContacts.map((contact) => {
            return <Contact userContact={contact} key={contact.id} />;
          })
        ) : (
          <p>Nothing to show...</p>
        )}
      </ul>
    </div>
  );
};
export default ContactList;
