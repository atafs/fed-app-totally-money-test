import { selectCards, createCard } from './helpers';
import { ADD_CARD, REMOVE_CARD, SELECT_CUSTOMER } from '../actions';

function allcards(state = [], action) {
  switch (action.type) {
    case SELECT_CUSTOMER:
      state = selectCards(action.payload);
      return state;
    case ADD_CARD:
      let cards = state.filter(item => item.id !== action.id);
      return cards;
    case REMOVE_CARD:
        cards = [...state, createCard(action.id)];
        return cards;
    default:
      return state;
  }
}

export default allcards;
