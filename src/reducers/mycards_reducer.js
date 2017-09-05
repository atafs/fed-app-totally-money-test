import { ADD_CARD, REMOVE_CARD, SELECT_CUSTOMER } from '../actions';
import { createCard } from './helpers';

function mycards(state = [], action) {
  let cards;
  switch (action.type) {
    case ADD_CARD:
      cards = [...state, createCard(action.id)];
      return cards;
    case REMOVE_CARD:
      cards = state.filter(item => item.id !== action.id);
      return cards;
    case SELECT_CUSTOMER:
      cards = [];
      return cards;
    default:
      return state;
  }
}

export default mycards;
