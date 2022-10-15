import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnKeys = Object.keys(options);
  return (
      <ul>{btnKeys.map(btnKey => (
      <button type="button" key={btnKey} name={btnKey} onClick={onLeaveFeedback}>{btnKey}</button>
      ))}
      </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.objectOf(PropTypes.number),
};