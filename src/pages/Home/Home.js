import React from 'react';
import { useTheme } from '../../components/theme/ThemeContext';
import ColorCards from '../../components/ColorCards/ColorCards';
import Counter from '../../components/Counter/Counter';
import { HomeWrapper } from './Home.styled';

const Home = () => {
  const theme = useTheme();

  return (
    <HomeWrapper theme={theme.themeColor}>
      <h1>Home</h1>
        <ColorCards />
      <hr/>
      <Counter />
    </HomeWrapper>
  )
};

export default Home;
