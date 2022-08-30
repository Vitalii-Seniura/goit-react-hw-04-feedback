import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.stat}>
      <ul className={css.statList}>
        <li> Good: {good} </li>
        <li> Neutral: {neutral}: </li>
        <li> Bad: {bad} </li>
        <li> Total: {total()} </li>
        <li> PositivePercentage: {positivePercentage()}% </li>
      </ul>
    </div>
  );
};

export default Statistics;
