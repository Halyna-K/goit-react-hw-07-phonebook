import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/actions'

const ContactList = () => {
const contacts = useSelector(getFilteredContacts);
const dispatch = useDispatch();

return (
  <ul className={s.list}>
    {contacts.map(({id, name, number}) => (
    <li key={id} className={s.item}>
        <p className={s.text}>{name + " : " + number}</p>

        <Button
          id= {id}
          variant="outline-secondary"
          onClick={() => (
            dispatch(deleteContact(id))
          )}
        >
          Delete
        </Button>
      </li>
    ))}
  </ul>
)
};

 ContactList.propTypes = {
   onDeleteContact: PropTypes.func,
   contacts: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.string,
       name: PropTypes.string,
       number: PropTypes.string,
     })
   ),
 };
export default ContactList
