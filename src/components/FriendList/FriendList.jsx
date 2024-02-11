import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.totalList}>
      <FriendListItem userProfile={friends} />
    </ul>
  );
};

export default FriendList;
