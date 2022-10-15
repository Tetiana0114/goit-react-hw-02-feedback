import PropTypes from 'prop-types';
import { ImSad, ImNeutral, ImSmile } from "react-icons/im";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li><ImSmile/> Good: {good}</li>
      <li><ImNeutral/> Neutral: {neutral}</li>
      <li><ImSad/> Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage} %</li>
    </ul>
  );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};