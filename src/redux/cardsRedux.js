import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
// usuwam ponizszy fragment odpowiedzialny za filtrowanie kart wg wyszukanej frazy
//&& new RegExp(searchString, 'i').test(card.title));

//nowy selektor wyszukujący karty ze wszystkich list wg szukanej frazy
export const getCardsForSearchResults = ({ cards }, searchString) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title))
    .map(card => ({ ...card }));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
