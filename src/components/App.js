import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux to connect your component to the Redux store
import { incrementCount, decrementCount, resetCount } from '../actions'; // Import your action creators

class CounterContainer extends React.Component {
  render() {
    const { count, incrementCount, decrementCount, resetCount } = this.props;

    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    );
  }
}

// Map the Redux state to the component props
const mapStateToProps = (state) => {
  return {
    count: state.count, // Assuming your Redux state has a property called "count"
  };
};

// Map the action creators to the component props
const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  resetCount,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
