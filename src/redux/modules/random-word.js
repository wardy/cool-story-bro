// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_RANDOM_WORD = 'LOAD_RANDOM_WORD';

// ------------------------------------
// Actions
// ------------------------------------

export function loadRandomWord () {
 return {
   type: LOAD_RANDOM_WORD
 }
}

export const actions = {
  loadRandomWord
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_RANDOM_WORD]: (state, action) => {return {firstWord: 'Cool', secondWord: 'Story', thirdWord: 'Bro'}}
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
