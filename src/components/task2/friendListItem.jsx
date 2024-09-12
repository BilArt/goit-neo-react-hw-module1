import styles from "./friends_list.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friend}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
