import axios from 'axios';

export const api = axios.create({
  baseURL:'https://dtmoney-nine-hazel.vercel.app/api',
})