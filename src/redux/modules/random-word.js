import positiveWordSynonyms from 'fixtures/positive-word-synonyms.json'
import storySynonyms from 'fixtures/story-synonyms.json'
import brotherSynonyms from 'fixtures/brother-synonyms.json'

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
  [LOAD_RANDOM_WORDS]: (state, action) => {return Object.assign({}, state, {firstWord: 'Cool', secondWord: 'Story', thirdWord: 'Bro'})}
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  firstWord: '',
  secondWord: '',
  thirdWord: '',
  wordsArray: [positiveWordSynonyms, storySynonyms, brotherSynonyms]
};
export default function randomWordReducer (state = initialState, action): number {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
