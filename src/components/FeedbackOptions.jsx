import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return ( 
  <ul>
      {options.map(option => {
        return (
          <button key={option} type="button" onClick={selectedBtn(option, onLeaveFeedback)}>{option}</button>);
      })}
    </ul>
  );
};

function selectedBtn(option, onLeaveFeedback) {
  if (option === 'GOOD') {
    return onLeaveFeedback[0];
  }
  if (option === 'NEUTRAL') {
    return onLeaveFeedback[1];
  }
  if (option === 'BAD') {
    return onLeaveFeedback[2];
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};