import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
const API_ENDPOINT = '/contacts';

export const getContacts = async () => {
  try {
    const res = await axios.get(`${API_ENDPOINT}`);
    return res.data;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

export const addContact = async contact => {
  try {
    const res = await axios.post(`${API_ENDPOINT}`, contact);
    return res.data;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

export const deleteContact = async id => {
  try {
    const res = await axios.delete(`${API_ENDPOINT}/${id}`);
    return res.data;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};
