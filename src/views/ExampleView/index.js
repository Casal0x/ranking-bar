import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/reducers/exampleReducer';

const ExampleView = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          style={{ marginRight: '1rem' }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          style={{ marginLeft: '1rem' }}
          onClick={() => dispatch(decrement())}
          disabled={count === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ExampleView;
