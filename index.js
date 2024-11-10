import { createStore } from './store.js';
import { add, subtract, reset } from './actions.js';

/**
  * @module index
  * Demonstrates how to use the store, actions, and observers in the Tally App.
*/

// Create store instance
const store = createStore();

/**
  * Observer function to log the current state of the store.
	* @function
	* @param {Object} state - The updated state that will be logged.
*/
const logState = (state) => {
  console.log('Current State:', state); // Log the state to the console
};

/**
  * Subscribe to state changes, and log the state whenever it changes.
	* @function
	* @returns {Function} The unsubscribe function to stop receiving updates.
*/
const unsubscribe = store.subscribe(logState);

// Log the initial state
logState(store.getState()); // {Current State: count: 0 }

// Dispatch actions to update the state
store.dispatch(add());      // Current State: { count: 1 }
store.dispatch(add());      // Current State: { count: 2 }
store.dispatch(subtract()); // Current State: { count: 1 }
store.dispatch(reset());    // Current State: { count: 0 }

// Unsubscribe the observer function
unsubscribe();

// Dispatch another action 
store.dispatch(add()); // (no log will appear when this runs)