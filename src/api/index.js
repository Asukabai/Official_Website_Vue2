import axios from 'axios'
import process from "shelljs";

export default axios.create({
  baseURL: process.env.API_ROOT || '',
  timeout: 10000
})
