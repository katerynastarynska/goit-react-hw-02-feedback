import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  // onFeedbackGood,
  // onFeedbackNeutral,
  onLeaveFeedback,
}) => (
  <div className={css.feedbackOptions}>
    <button type="button" className={css.feedbackBtn} onClick={onLeaveFeedback}>
      Good
    </button>
    <button
      type="button"
      className={css.feedbackBtn}
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button type="button" className={css.feedbackBtn} onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);
export default FeedbackOptions;
