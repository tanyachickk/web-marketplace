import axios, { setToken } from '@/config/axios';

class LoginService {
  public async signIn(email, password) {
    const response = await axios.post('/login', { email, password });
    const { token, clientDetails } = response.data;
    if (token) {
      setToken(token);
      localStorage.setItem('token', token);
    }
    return clientDetails;
  }
  public async signUp(data) {
    await axios.post('/register', data);
    const response = await axios.post('/login', { email: data.email, password: data.password });
    const { token, clientDetails } = response.data;
    if (token) {
      setToken(token);
      localStorage.setItem('token', token);
    }
    return clientDetails;
  }
}

export default LoginService;
