import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statisticsWrapper}>
    <h2 className={css.statisticsTitle}>Statistics</h2>

    {total > 0 ? (
      <div className={css.statistics}>
        <ul className={css.statisticsList}>
          <li className={css.statisticsItem}>
            <p className={css.statisticsText}>Good: {good}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css.statisticsText}>Neutral: {neutral}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css.statisticsText}>Bad: {bad}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css.statisticsText}>Total: {total}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css.statisticsText}>
              Positive feedback: {positivePercentage || 5} %
            </p>
          </li>
        </ul>
      </div>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
};
