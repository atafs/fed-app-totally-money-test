export const SELECT_CUSTOMER = 'SELECT_CUSTOMER';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';


export function selectCustomer(customer) {
  const action = {
    type: SELECT_CUSTOMER,
    payload: customer
  }
  return action;
}

export function addCardById(id, customer) {
  const action = {
    type: ADD_CARD,
    payload: customer,
    id
  }
  return action;
}

export function removeCardById(id, customer) {
  const action = {
    type: REMOVE_CARD,
    payload: customer,
    id
  }
  return action;
}
