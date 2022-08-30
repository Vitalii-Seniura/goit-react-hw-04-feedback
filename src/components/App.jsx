import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './feedback/feedback';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';
import Section from './section/section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = { good, bad, neutral };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const keys = Object.keys(option);

  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={keys} onLeaveFeedback={onLeaveFeedback} />
      <Section title="Statistics" />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
      <GlobalStyle />
    </div>
  );
};

App.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
