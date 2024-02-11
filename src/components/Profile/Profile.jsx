import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <>
      <div className={styles.personalInfo}>
        <img className={styles.imgElement} src={image} alt="User avatar" />
        <p className={styles.authorName}>{name}</p>
        <p className={styles.authorTag}>@{tag}</p>
        <p className={styles.location}>{location}</p>

        <ul className={styles.totalList}>
          <li className={styles.followerElem}>
            <span className={styles.accountInfo}>Followers</span>
            <span className={styles.accountStatistics}>{followers}</span>
          </li>
          <li className={styles.listElement}>
            <span className={styles.accountInfo}>Views</span>
            <span className={styles.accountStatistics}>{views}</span>
          </li>
          <li className={styles.likesElem}>
            <span className={styles.accountInfo}>Likes</span>
            <span className={styles.accountStatistics}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
