import { createStore, applyMiddleware, AnyAction, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reactReduxSpfx/reducers/Root';

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)));

// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// });

export default store;