import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './feedback/feedback';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';
import Section from './section/section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Section title="Statistics" />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
        <GlobalStyle />
      </div>
    );
  }
}

App.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
