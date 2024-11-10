import { ADD, SUBTRACT, RESET } from './actions.js';

/**
  * @module reducer
  * Contains the reducer function that updates the state based on dispatched actions.
*/

/**
  * Reducer function to manage the state of the counter.
	* 
	* @function
	* @param {Object} state - The current state of the counter (default: { count: 0 }).
	* @param {Object} action - The action object containing the type (e.g., { type: 'ADD' }).
	* @returns {Object} The new state after the action has been applied.
	* 
	* @example
	* const newState = counterReducer({ count: 2 }, { type: 'ADD' });
	* console.log(newState); // { count: 3 }
*/
export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 }; // Increment the count
    case SUBTRACT:
      return { ...state, count: state.count - 1 }; // Decrement the count
    case RESET:
      return { ...state, count: 0 }; // Reset the count to 0
    default:
      return state; // Return the current state if the action type is not recognized
  }
};
