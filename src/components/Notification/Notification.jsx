import css from './Notification.module.css';

const Notification = ({ message} ) => (
<div className={css.notification}>
    <p className={css.notificationText}>{message}</p>
</div>
)

export default Notification;