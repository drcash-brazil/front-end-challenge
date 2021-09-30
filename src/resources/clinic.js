import api from './api';

const endpointBaseUrl = '/clinics';

const Clinic = {
  getAll: () => api.get(endpointBaseUrl),
  create: (values) => api.post(endpointBaseUrl, values)
}

export default Clinic;