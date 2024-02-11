import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ userProfile }) => {
  return (
    <>
      {userProfile.map((user) => (
        <li className={styles.listElement} key={user.id}>
          <div className={styles.listWrapper}>
            <img src={user.avatar} alt="Avatar" width="120" />
            <p className={styles.textElement}>{user.name}</p>
            <p
              className={clsx({
                [styles.greenText]: user.isOnline,
                [styles.redText]: !user.isOnline,
              })}
            >
              {user.isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </li>
      ))}
    </>
  );
};

export default FriendListItem;
