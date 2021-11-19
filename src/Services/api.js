import axios from "axios";

const UNIQUE_ID = `61968c60af46280017e7e165`;
const BASE_URL = `https://${UNIQUE_ID}.mockapi.io/api/v1`;

axios.defaults.baseURL = BASE_URL;

const fetchContacts = async () => {
  try
  { return await axios.get('/contacts?page=1&limit=10')}
  catch (err)
    { return err.message; }
        //  return axios.get('/contacts?page=1&limit=10')
        // return axios.get(`/contacts?search=${query}&page=${page}&limit=5`)
      }


const fetchAddContact = (contact) => {
  return axios.post('/contacts',contact)
}

const fetchDeleteContact = (id) => {
  return axios.delete(`/contacts/${id}`)
  // .then(res=>res.data)
}
const api = {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact
};
export default api;
