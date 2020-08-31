import React from 'react';
import ColorCards from '../../components/ColorCards/ColorCards';
import Counter from '../../components/Counter/Counter';

const Home = () => {

  return (
    <React.Fragment>
      <h1>Home</h1>
        <ColorCards />

      <hr/>
      <Counter />
    </React.Fragment>
  )
};

export default Home;