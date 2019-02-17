import * as types from '../actions/types';

const initialState = {
    countries: [],
    reportData: undefined,
    unresolvedCustomers: undefined,
    unresolvedCustomers3RD: undefined,
    DimonField: undefined
};

export default function ResolverReducer(state = initialState, action) {
    switch (action.type) {
        case types.GOT_IT:
        return (<any>Object).assign({}, state, {
            DimonField: action.payload,
        });
        case types.UNRESOLVED_CUSTOMERS_FETCHED:
            return (<any>Object).assign({}, state, {
                reportData: undefined,
                unresolvedCustomers: action.payload,
                unresolvedCustomers3RD: undefined
            });
        case types.UNRESOLVED_CUSTOMERS3RD_FETCHED:
            return (<any>Object).assign({}, state, {
                reportData: undefined,
                unresolvedCustomers: undefined,
                unresolvedCustomers3RD: action.payload
            });
        default:
            return state;
    }
}