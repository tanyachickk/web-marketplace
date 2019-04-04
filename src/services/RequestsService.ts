import axios from '@/config/axios';

class RequestsService {
  public getRequests() {
    return axios.get('/auth/requests').then(({ data }) => data);
  }

  public getRequest(id) {
    return axios.get(`/auth/requests/${id}`).then(({ data }) => data);
  }

  public createRequest(data) {
    return axios.post('/auth/requests', data).then((response) => response.data);
  }
}

export default RequestsService;
