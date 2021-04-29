import axios from 'axios';

const SERVER_DOMAIN = process.env.SERVER_DOMAIN;

const handleError = (err) => {
    console.log(`handle ERRORRRRRRRRRRRRRR`,err);
}

const getHeaders = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
        },
    };
};
// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path) => {
    return new Promise((resolve, reject) => {
        axios.get(`${path}`, getHeaders())
        .then(response => { resolve(response) })
        .catch(error => { reject(handleError(error)) });
    });
};
// HTTP PATCH Request - Returns Resolved or Rejected Promise
export const patch = (path, data) => {
    return new Promise((resolve, reject) => {
        axios.patch(`${SERVER_DOMAIN}${path}`, data, getHeaders())
        .then(response => { resolve(response) })
        .catch(error => { reject(error) });
    });
};
// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (path, data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${path}`, data, getHeaders())
        .then(response => { resolve(response) })
        .catch(error => { reject(handleError(error)) });
    });
};
// HTTP DELETE Request - Returns Resolved or Rejected Promise
export const del = (path) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${SERVER_DOMAIN}${path}`, getHeaders())
        .then(response => { resolve(response) })
        .catch(error => { reject(handleError(error)) });
    });
};