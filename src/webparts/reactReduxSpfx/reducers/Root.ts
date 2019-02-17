import { combineReducers, AnyAction } from 'redux';

import managerReducer from './Manager';
import resolverReducer from './Resolver';

export default combineReducers({manager: managerReducer, resolver: resolverReducer});