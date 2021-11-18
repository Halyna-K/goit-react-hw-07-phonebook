import s from "./ContactForm.module.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/actions';
import {getContacts} from '../../redux/contacts/selectors';

const nameId = uuid();
const numberId = uuid();

function ContactForm () {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
    }
  };

  const addNewContact = (obj) => {
    const sameName = contacts.map((el) => el.name).includes(obj.name);
    if (sameName) {
      alert(`${obj.name} is already in contacts!`);
    } else {
      dispatch(addContact({...obj}, obj.id));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {id: uuid(), name, number };
    addNewContact(contact)
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameId}>
        Name
      </label>
      <input
        id={nameId}
        onChange={handleChange}
        className={s.input}
        type="text"
        name="name"
        value={name}
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className={s.label} htmlFor={numberId}>
        Number
      </label>
      <input
        id={numberId}
        onChange={handleChange}
        className={s.input}
        type="tel"
        name="number"
        value={number}
        placeholder="Enter number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Button
        type="submit"
        variant="secondary"
      >
        Add contacts
      </Button>
    </form>
  );
}

export default ContactForm
