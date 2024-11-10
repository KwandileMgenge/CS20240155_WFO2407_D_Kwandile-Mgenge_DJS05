/**
  * @module action
  * Defines action types and action creators for the Tally App.
*/

// Action types
/**
  * Action type for incrementing the count.
  * @type {string}
*/
export const ADD = 'ADD';

/**
  * Action type for decrementing the count.
  * @type {string}
*/
export const SUBTRACT = 'SUBTRACT';

/**
  * Action type for resetting the count to zero.
  * @type {string}
*/
export const RESET = 'RESET';

/**
  * Creates an action to increment the count.
	* @function
	* @returns {Object} The action object with type 'ADD'.
*/
export const add = () => ({ type: ADD });

/**
	* Creates an action to decrement the count.
	* @function
	* @returns {Object} The action object with type 'SUBTRACT'.
*/
export const subtract = () => ({ type: SUBTRACT });

/**
  * Creates an action to reset the count to zero.
	* @function
	* @returns {Object} The action object with type 'RESET'.
*/
export const reset = () => ({ type: RESET });
