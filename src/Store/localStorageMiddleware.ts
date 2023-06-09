import { Middleware } from 'redux';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    const dataToStore = store.getState().myData; // replace 'myData' with your data slice name

    localStorage.setItem('myData', JSON.stringify(dataToStore)); // replace 'myData' with your data slice name

    return result;
};

export default localStorageMiddleware;

//store

// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import bonusReducer, { BonusReducerType } from './bonusReducer';
// import localStorageMiddleware from './localStorageMiddleware';
//
// // Combine all reducers
// const rootReducer = combineReducers({
//     bonusReducer,
//     // Add other reducers here
// });
//
// const InitialState: { bonusReducer: BonusReducerType } = {
//     bonusReducer: {
//         timeBonus: 0,
//         pointsBonus: 1,
//     },
//     // Add initial states for other reducers here
// };
//
// // Create the store
// const store = createStore(rootReducer, InitialState, applyMiddleware(localStorageMiddleware));
//
// export default store;