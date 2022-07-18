import axios from 'axios';

export const handleFormSubmit = async (e, url, type, body) => {
  e.preventDefault();
  if (type.toLowerCase() === 'get') {
    return await axios.get(url);
  }
  if (type.toLowerCase() === 'post') {
    return await axios.post(url, { ...body });
  }
  if (type.toLowerCase() === 'put') {
    return await axios.put(url, { ...body });
  }
  if (type.toLowerCase() === 'delete') {
    return await axios.delete(url);
  }
};
