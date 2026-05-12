import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
})

export interface RegisterData {
  email: string
  password: string
}

export interface LoginData {
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  token_type: string
}

export const register = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data)
  return response.data
}

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', data)
  return response.data
}