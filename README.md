# Tally App with Redux-Inspired Store

This project implements a simple **Tally App** using a Redux-inspired store to manage the count state. It focuses on state management principles and the **Observer Pattern**, where state changes are logged to the console instead of being displayed in a UI.

## Project Structure

The project is split into three main parts:

1. **`action.js`** – Defines action types and action creators.
2. **`reducer.js`** – Contains the logic for updating the state based on dispatched actions.
3. **`store.js`** – Implements the store that holds the state, dispatches actions, and allows observers to listen for state changes.
4. **`index.js`** – The main file that demonstrates how the store works by dispatching actions and logging the state.

## How the Store Works

- The store holds the state of the app (in this case, the counter value).
- Actions like `ADD`, `SUBTRACT`, and `RESET` can be dispatched to change the state.
- Observers are functions that subscribe to the store and are notified whenever the state changes.

### Key Features:
- **Increment the counter** by dispatching the `ADD` action.
- **Decrement the counter** by dispatching the `SUBTRACT` action.
- **Reset the counter** to zero by dispatching the `RESET` action.
- **Observer Pattern**: Functions can subscribe to the store and log the state whenever it changes.

## Files in the Project

### 1. `action.js`

This file defines the action types and action creators that will be dispatched to the store. 

- **Action Types**: `ADD`, `SUBTRACT`, `RESET`
- **Action Creators**: Functions like `add()`, `subtract()`, and `reset()` return actions that describe the change to be made to the state.

### 2. `reducer.js`

This file contains the `counterReducer`, which takes the current state and an action, and returns a new state based on the action type.

### 3. `store.js`

The store holds the state and has three key methods:
- `getState()`: Returns the current state.
- `dispatch(action)`: Updates the state based on the action.
- `subscribe(observer)`: Allows functions to "subscribe" to the store and be notified of state changes.

### 4. `index.js`

This is the entry point where everything is tied together. It:
- Creates the store.
- Subscribes an observer function that logs the state to the console.
- Dispatches actions to change the state.

## How to Run the Code

1. **Download or clone the project** to your local machine.

2. **Navigate to the project folder** run the html document in a live server.


## Conclusion

- With everything said even when I was using ChatGPT to help me understand and structure the Redux Store, I still get lost in the rabbit whole. And honestly I still don't know how I got this to work, I have a lot of practicing to do.
