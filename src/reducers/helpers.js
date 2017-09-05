import cards_json from '../data/cards.json';

export function createCard(id) {
  let card = cards_json.find(card => card.id === id);
  return card;
}

export function selectCards(customer) {
  let cards = [];
  cards.push(createCard(5));

  if (customer.employment_status === 'Student') {
    cards.push(createCard(4));
  } else if (customer.annual_income > 16000 ) {
    cards.push(createCard(6));
  }

  return cards;
}
