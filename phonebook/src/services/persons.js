import axios from 'axios';
const base_url = 'http://localhost:3001/persons';

export const getAll = async () => {
  const req = axios.get(base_url);
  const res = await req;
  return res.data;
};

export const create = async (newObject) => {
  const res = await axios.post(base_url, newObject);
  return res.data;
};

export const update = async (id, newObject) => {
  const res = await axios.put(`${base_url}/${id}`, newObject);
  return res.data;
};

export const remove = async (id) => {
  const res = await axios.delete(`${base_url}/${id}`);
  return res.data;
};
