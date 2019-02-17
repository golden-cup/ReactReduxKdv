import axios from 'axios';
import store from '../../Store';

import * as types from '../actions/types';

//const serviceURL = 'https://app1.medieval.ml:3789/ADVANTIS.svc';
//const serviceURL = 'https://app1.medieval.ml/ADVANTIS.svc';
//const serviceURL = 'https://localhost:44322/ADVANTIS.svc';
const serviceURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export function getPeriods() {
    axios.get(serviceURL) // + '/GetPeriods')
    .then(res => {
        store.dispatch({ type: types.GOT_IT, payload: res.data });
    })
    .catch(error => {
        /* to-do*/
    });
}