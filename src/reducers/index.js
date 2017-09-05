import { combineReducers } from 'redux';

import allCards from './allcards_reducer.js';
import myCards from './mycards_reducer.js';
import customers from './customers_reducer.js';
import activeCustomer from './active_customer_reducer.js';

const rootReducer = combineReducers({
  allCards,
  myCards,
  customers,
  activeCustomer
});

export default rootReducer;
