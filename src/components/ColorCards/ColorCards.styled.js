import styled from 'styled-components';
import {Button} from '../../UI/Button.styled';

export const ColorSection = styled.section`
  display: flex;
`;

export const CardsWrapper = styled.div`
  flex: 0 0 75%;
  margin: 0 calc(10% / -10);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Card = styled.div`
  width: 20%;
  text-align: left;
  padding: 20px;
  border: 1px solid #000;
  margin: calc(10% / 10);
  display: inline-block;
  vertical-align: text-top;
  cursor: pointer;
  position: relative;
`;

export const StarsWrapper = styled.div`
  display: ${({isVisible}) => isVisible ? 'block' : 'none'}
`;

export const StarWrapper = styled.div`
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: inline-block;
`;

export const CardColor = styled.span`
  background: ${({bgColor}) => bgColor};
  border: 1px solid #333;
  display: block;
  width: 100%;
  font-weight: normal;
  height: 20px;
  margin-bottom: 20px;
`;

export const Star = styled.div`
  height: 24px;
  width: 24px;
  clip-path: polygon(
      50% 0%,
      63% 38%,
      100% 38%,
      69% 59%,
      82% 100%,
      50% 75%,
      18% 100%,
      31% 59%,
      0% 38%,
      37% 38%
  );
  background: ${({backgrColor}) => backgrColor}
`;

export const AddColorForm = styled.form`
  flex: 0 0 25%;
`;

export const AddColorButton = styled(Button)`
  background: #13b7d4;
  margin: 20px 0;
`;

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;