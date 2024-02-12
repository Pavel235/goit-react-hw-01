import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={styles.listWrapper}>
        <img src={avatar} alt="Avatar" width="120" />
        <p className={styles.textElement}>{name}</p>
        <p
          className={clsx({
            [styles.greenText]: isOnline,
            [styles.redText]: !isOnline,
          })}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};

export default FriendListItem;
