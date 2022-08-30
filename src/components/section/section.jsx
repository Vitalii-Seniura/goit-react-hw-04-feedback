import css from './section.module.css';

const Section = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export default Section;
