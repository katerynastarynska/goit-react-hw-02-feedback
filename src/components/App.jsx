import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

leaveFeedback = (option) => {

  this.setState(prevState => {
    return {
      [option]: prevState[option] + 1
    }
  })
}
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((acc, value) => value + acc, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const values = Object.values(this.state);
    const total = values.reduce((acc, value) => value + acc, 0);
    const positivePercentage =
      ((this.state.good / total) * 100).toFixed(0) || 0;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
