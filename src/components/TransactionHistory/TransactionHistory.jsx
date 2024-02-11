import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={styles.tableElement}>
        <thead>
          <tr>
            <th className={styles.headBlock}>Type</th>
            <th className={styles.headBlock}>Amount</th>
            <th className={styles.headBlock}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className={styles.bodyBlockType}>{item.type}</td>
              <td className={styles.bodyBlock}>{item.amount}</td>
              <td className={styles.bodyBlock}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
