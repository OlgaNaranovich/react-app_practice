import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addColor, deleteColor, rateColor} from '../../store/colorCards/actions';
import Stars from './Stars.js';
import AddColor from './AddColorForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {CardsWrapper, Card, CardColor, ColorSection, Close} from './ColorCards.styled';

const ColorCards = ({ totalRating = 5, colors, addColor, deleteColor, rateColor }) => {
  const [cardState, setCardState] = useState(colors.map((color, i) => i === 0));

  const changeState = (i) => {
    const state = [...cardState];
    state[i] = !state[i];
    return state;
  };

  const removeColor = (e) => {
    e.stopPropagation();
    const target = e.target.closest('div');
    deleteColor(target.id);
  }

  return (
    <ColorSection>
      <CardsWrapper>
        {colors.map((card, i) => (
          <Card key={i} id={card.id} onClick={() => setCardState(changeState(i))}>
            <h4>{card.title}</h4>
            <CardColor bgColor={card.color} />
            <Stars totalRating={totalRating}
                   initialRating={card.rating}
                   id={card.id}
                   rateColor={rateColor}
                   bgColor={card.color}
                   visibility={cardState[i]} />
            <Close onClick={removeColor}>
              <FontAwesomeIcon icon={faWindowClose} />
            </Close>
          </Card>
        ))}
      </CardsWrapper>
      <AddColor addNewColor={addColor} />
    </ColorSection>
  )
}

const mapStateToProps = state => ({
  colors: state.colorCards,
});

const mapDispatchToProps = dispatch => ({
  addColor: bindActionCreators(addColor, dispatch),
  deleteColor: bindActionCreators(deleteColor, dispatch),
  rateColor: bindActionCreators(rateColor, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorCards);