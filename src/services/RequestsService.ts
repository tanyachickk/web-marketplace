import axios from '@/config/axios';

class RequestsService {
  public getRequests() {
    return axios.get('/auth/requests').then(({ data }) => data);
  }
}

export default RequestsService;
