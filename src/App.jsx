import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  // const [contactsList, setContactList] = useState(() => {
  //   const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));

  //   if (savedContacts !== null && savedContacts.length !== 0) {
  //     return savedContacts;
  //   }
  //   return [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ];
  // });

  // useEffect(() => {
  //   if (contactsList !== null) {
  //     window.localStorage.setItem("contacts", JSON.stringify(contactsList));
  //   }
  // }, [contactsList]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
