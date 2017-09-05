import { SELECT_CUSTOMER } from '../actions';

function activeSelectedCustomer(state = null, action) {
  switch (action.type) {
    case SELECT_CUSTOMER:
      return action.payload;
    default:
      return state;
  }
}

export default activeSelectedCustomer;
