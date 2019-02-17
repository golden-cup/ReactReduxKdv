import * as types from '../actions/types';

const initialState = {
    periods: [],
    distributors: [],
    superField: undefined,
};

export default function ManagerReducer(state = initialState, action) {
    switch (action.type) {
        case types.PERIODS_FETCHED:
            return (<any>Object).assign({}, state, {
                periods: action.payload
            });
        case types.DISTRIBUTORS_FETCHED:
            return (<any>Object).assign({}, state, {
                distributors: action.payload
            });
        default:
            return state;
    }
}