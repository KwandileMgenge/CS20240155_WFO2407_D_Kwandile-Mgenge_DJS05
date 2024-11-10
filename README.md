# Tally App Redux-Inspired Store

This project implements a Redux-inspired store to manage the state of a tally counter app. The store handles actions like `ADD`, `SUBTRACT`, and `RESET` and logs state changes to the console.

## Approach

- I created a simple store that holds the count in the state.
- Actions like "ADD", "SUBTRACT", and "RESET" mutate the state in an immutable way.
- The `subscribe` method allows us to observe changes to the state by logging it.

## Challenges

- The main challenge was ensuring that the state is always updated immutably, which was addressed using the spread operator (`...`) to create new state objects.

## Testing

- The implementation passes all user stories, including initial state verification, incrementing, decrementing, and resetting the counter.

## Conclusion

- With everything said even when I was using ChatGPT to help me understand and structure the Redux Store, I still get lost in the rabbit whole. And honestly I still don't know how I got this to work, I have a lot of practicing to do.
