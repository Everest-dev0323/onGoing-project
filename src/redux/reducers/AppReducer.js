import { combineReducers } from 'redux';

import { FetchZipCodesReducer } from './FetchZipCodesReducer';

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer
});