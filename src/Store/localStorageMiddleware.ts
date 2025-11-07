import { Middleware } from 'redux';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    const dataToStore = store.getState().myData; // replace 'myData' with your data slice name

    localStorage.setItem('myData', JSON.stringify(dataToStore)); // replace 'myData' with your data slice name

    return result;
};

export default localStorageMiddleware;

