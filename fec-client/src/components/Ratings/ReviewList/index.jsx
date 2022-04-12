import React, { useState } from 'react';
import styled from 'styled-components';

import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 600px;
  overflow-y: auto;
  align-content: center;
  border-top: 1px solid lightgrey;
  margin: 10px;
`;

const ShowMore = styled.button`
  padding: 5px;
  margin 10px;
  background-color: #242125;
  border: 1px solid #403244;
  border-radius: 7px;
  color: #fff;
  width: 20%;

  &: hover{
    background-color: #4b464d;
    cursor: pointer;
    color: #fff;
  }

  &:active{
    background-color: #fff;
    color: #242125;
  }
`;

const ReviewList = ({reviews}) => {
  const [numReviews, setNumReviews] = useState(2);

  const handleShowMoreClick = () => {
    setNumReviews(numReviews + 2);
  };

  return (
    <ReviewContainer title = 'review-list'>
      { reviews.length ?
        <div>
          {reviews.slice(0, numReviews).map(review => (
            <ReviewTile review = {review} key = {review.review_id} />
          ))
          }
        </div> :
        <h4>Be the first to write a review.</h4>
      }
      { reviews.length > numReviews ? <ShowMore onClick = {handleShowMoreClick} >Show More Reviews</ShowMore> : null }

    </ReviewContainer>
  );
};


export default ReviewList;