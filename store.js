import { counterReducer } from './reducers.js';

/**
  * @module store
  * Implements a Redux-inspired store that manages state, dispatches actions,
  * and allows observers to subscribe to state changes.
*/

/**
  * Creates a Redux-inspired store.
  * @function
  * @returns {Object} The store object with methods to interact with the state:
  *   - `getState()`: Returns the current state.
  *   - `dispatch(action)`: Dispatches an action to update the state.
  *   - `subscribe(observer)`: Registers an observer to be notified on state changes.
*/
export const createStore = () => {
  let state = {
    count: 0
  }; // Initial state
  let observers = []; // List of observer functions

  /**
    * Gets the current state of the store.
    * @function
    * @returns {Object} The current state (e.g { count: 0 }).
  */
  const getState = () => state;

  /**
    * Dispatches an action to update the state.
    * @function
    * @param {Object} action - The action object that will modify the state.
    * @returns {void}
  */
  const dispatch = (action) => {
    state = counterReducer(state, action); // Use the reducer to calculate the new state
    observers.forEach(observer => observer(state)); // Notify all observers
  };

  /**
    * Registers an observer function to be notified whenever the state changes.
    * @function
    * @param {Function} observer - The observer function that accepts the updated state.
    * @returns {Function} The unsubscribe function that removes the observer.
  */
  const subscribe = (observer) => {
    observers.push(observer); // Add the observer to the list
    // Return an unsubscribe function to remove the observer
    return () => {
      observers = observers.filter(obs => obs !== observer); // Remove the observer
    };
  };

  return {
    getState,
    dispatch,
    subscribe
  };
}
