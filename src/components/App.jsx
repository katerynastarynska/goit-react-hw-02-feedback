import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

// export const App = () => {
//   return (
//     <div>
//  {/* <Statistics /> */}
//  <Statistics good={0} neutral={0} bad={0} />
//     </div>

//   );
// };

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

  handleFeedbackGood = () => {
    console.log('click on btn good');
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleFeedbackNeutral = () => {
    console.log('click on btn neutral');
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleFeedbackBad = () => {
    console.log('click on btn bad');
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  // leaveFeedback = () => {
  //   const values = Object.values(this.state);
  //   console.log(values);
  //   this.setState(prevState => ({
  //    values: prevState.values.map(value => console.log(value + 1))}))

  //   // this.setState( console.log(values)
  //   // )
  //   }
  
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((acc, value) => value + acc, 0);
    console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const values = Object.values(this.state);
    const total = values.reduce((acc, value) => value + acc, 0);
    const positivePercentage = ((this.state.good / total) * 100).toFixed(0) || 0;
    console.log(positivePercentage);
    return positivePercentage;
  };

  
  //   console.log('click on btn', this.state);
  //   const { good, neutral, bad } = e.target;
  //   console.log(e.target.value);
  //   this.setState(prevState => ({

  //           // bad: prevState.bad + 1,
  //   }

  //   ))
  // };

  render() {
    const { good, neutral, bad } = this.state;
    //  const percent = (good / total * 100).toFixed(0)
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[good, neutral, bad]}
          onFeedbackGood={this.handleFeedbackGood}
          onFeedbackNeutral={this.handleFeedbackNeutral}
          onFeedbackBad={this.handleFeedbackBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
