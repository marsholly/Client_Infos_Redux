import { combineReducers } from 'redux';

import infos from './infos';
import notification from './notification';

export default combineReducers({ infos, notification });
