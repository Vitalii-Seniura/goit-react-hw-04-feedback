import css from './notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
};
export default Notification;
