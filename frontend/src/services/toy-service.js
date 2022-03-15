import {storageService} from './storage-service.js';
import axios from 'axios';

const TOY_KEY = 'toys';

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/toy/'
    : '//localhost:3001/api/toy/';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

function query(filterBy) {
    return axios.get(BASE_URL, {params: filterBy})
        .then(res => res.data)
}

function getById(toyId) {
    return axios.get(BASE_URL + toyId)
        .then(res => res.data)
}

function remove(toyId) {
    return axios.delete(BASE_URL + toyId);
}

function save(toy) {
    if(toy._id) return axios.put(BASE_URL + toy._id, toy).then(res => res.data);
    return axios.post(BASE_URL, toy).then(res => res.data);
}

function getEmptyToy(_id = '') {
    return {
        _id,
        name: '',
        price: 0,
        labels: [],
        inStock: true
    }
}