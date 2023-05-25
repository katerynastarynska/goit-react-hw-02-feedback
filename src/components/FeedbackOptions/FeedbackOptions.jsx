import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.feedbackOptions}>
    {options.map(option => {
      return (
        <li key={option} className={css.feedbackOptionsList}>
          <button
            type="button"
            className={css.feedbackBtn}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      );
    })}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
