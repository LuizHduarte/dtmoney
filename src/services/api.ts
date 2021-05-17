import axios from 'axios';

export const api = axios.create({
  baseURL:'https://dtmoney-two.vercel.app/api',
})