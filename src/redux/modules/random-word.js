// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_RANDOM_WORDS = 'LOAD_RANDOM_WORDS';

// ------------------------------------
// Actions
// ------------------------------------

export function loadRandomWords () {
 return {
   type: LOAD_RANDOM_WORDS
 }
}

export const actions = {
  loadRandomWords
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_RANDOM_WORDS]: (state, action) => {return {firstWord: 'Cool', secondWord: 'Story', thirdWord: 'Bro'}}
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  firstWord: '',
  secondWord: '',
  thirdWord: ''
};
export default function randomWordReducer (state = initialState, action): number {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
