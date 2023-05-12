import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onFeedbackGood,
  onFeedbackNeutral,
  onFeedbackBad,
}) => (
  <div className={css.feedbackOptions}>
    <button type="button" className={css.feedbackBtn} onClick={onFeedbackGood}>
      Good
    </button>
    <button
      type="button"
      className={css.feedbackBtn}
      onClick={onFeedbackNeutral}
    >
      Neutral
    </button>
    <button type="button" className={css.feedbackBtn} onClick={onFeedbackBad}>
      Bad
    </button>
  </div>
);
export default FeedbackOptions;
