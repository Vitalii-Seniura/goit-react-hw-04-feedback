import React from 'react';
import css from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      <ul className={css.list}>
        {options.map(option => (
          <li key={option}>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
