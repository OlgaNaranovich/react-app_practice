import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {decrement, increment} from '../../store/counter/actionCreate';
import {Button} from '../../UI/Button.styled';

const Counter = ({counterState, isIncrement, isDecrement}) => {
  const addCount = () => {
    isIncrement();
  }

  const subCount = () => {
    isDecrement();
  }

  return (
    <div className="counter">
      <p>Counter: {counterState}</p>
      <Button onClick={addCount}>Add</Button>
      <Button onClick={subCount}>Sub</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counterState: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  isIncrement: bindActionCreators(increment, dispatch),
  isDecrement: bindActionCreators(decrement, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);