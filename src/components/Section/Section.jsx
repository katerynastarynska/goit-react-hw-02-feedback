import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.sectionWrapper}>
    <h3 className={css.feedbackTitle}>{title}</h3>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
