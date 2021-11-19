import { axios } from './api';
let url = '';
class BaseService {
    
    constructor(complement = '') {
        url = complement;
    }

    async list() {
        return await axios.get(url);
    }

    async save(data) {
        return await axios.post(url, data);
    }

    async update(data) {
        return await axios.patch(url, data);
    }

    async remove(data) {
        return await axios.delete(`${url}/${data.id}`);
    }

    async get(id) {
        return await axios.get(`${url}/${id}`);
    }

}

export { BaseService };
