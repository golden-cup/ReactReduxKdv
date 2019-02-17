import { createStore, applyMiddleware, AnyAction, Store} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reactReduxSpfx/reducers/Root';

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

export default store;