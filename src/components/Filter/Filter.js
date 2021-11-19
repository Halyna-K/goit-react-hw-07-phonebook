import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../redux/apiContacts/actions';
import { getFilter } from '../../redux/apiContacts/selectors';


const Filter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch()


  const changeFilter = useCallback( e =>
    {
    // setFilter(e.target.value); // local
    dispatch(filterValue(e.target.value));
    },
     [dispatch]);

  return (
  <label htmlFor={filter.id} value={filter} className={s.filter}>
    Find contact by name
    <input
      id={filter.id}
      onChange={changeFilter}
      className={s.input}
      type="text"
      name="filter"
      value={filter.value}
      placeholder="Enter contact name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
  </label>
  )
};

 Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func,
 };
export default Filter
