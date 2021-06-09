import 'isomorphic-fetch'
import axios from 'axios'


const API_URL = process.env.API_URL || 'http://localhost:3000'

export async function getAllveiculos() {
  const res = await axios.get(`${API_URL}/veiculos`)
  const veiculos = res.data
  return veiculos
}