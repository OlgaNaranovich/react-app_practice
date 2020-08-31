import React, {useState} from 'react';
import { StarsWrapper, StarWrapper, Star } from './ColorCards.styled';

const Stars = ({totalRating, initialRating, id, rateColor, bgColor, visibility}) => {
  const [ratingSelected, setRatingSelected] = useState(initialRating);

  const defineRating = (rating) => {
    setRatingSelected(rating);
    rateColor({id, rating});
  }

  return (
      <StarsWrapper isVisible={visibility}>
        {[...Array(totalRating)].map((item, i) => (
          <StarWrapper key={i} onClick={(e) => {e.stopPropagation(); defineRating(i + 1)}} >
            <Star backgrColor={i < ratingSelected ? bgColor : 'gray'} />
          </StarWrapper>
          ))}
        <p>{`Color is ${ratingSelected} of ${totalRating}`}</p>
      </StarsWrapper>
    )
  }
  
export default Stars;