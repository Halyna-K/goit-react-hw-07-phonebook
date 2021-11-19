import { useEffect } from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux';
import {contactsOperations, contactsSelectors} from '../../redux/apiContacts';
// import { getFilteredContacts } from '../../redux/apiContacts/selectors';
// import { getFetchContacts, deleteContact } from '../../redux/apiContacts/operations';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
//  const [query, setQuery] = useState("");
//  const [page, setPage] = useState(1);

 useEffect(() => {
//     if (!query) return;
//    setQuery()
  dispatch(contactsOperations.getFetchContacts())
//    dispatch(getContacts(query,page))
  // setPage((prev) => prev + 1);
   }, [dispatch]);

return (
  <ul className={s.list}>
    {contacts.map(({id, name, number}) => (
    <li key={id} className={s.item}>
        <p className={s.text}>{name + " : " + number}</p>

        <Button
          id= {id}
          variant="outline-secondary"
          onClick={() => (
            dispatch(contactsOperations.deleteContact(id))
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
