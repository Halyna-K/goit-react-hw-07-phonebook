import "./App.css";
import Title from './components/Title/Title'
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App () {
  return (
    <div className="App">
      <Title text="Phonebook" className="title"/>
      <ContactForm />
      <Title text="Contacts" className="title"/>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
