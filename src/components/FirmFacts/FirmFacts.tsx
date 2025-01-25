import React from 'react';
import styles from './FirmFacts.module.scss';
import FirmFactCard from '../FirmFactCard/FirmFactCard';

const FirmFacts: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Firm Facts</h1>
      <hr className={styles.separator} />

      <div className={styles.grid}>
        <div className={`${styles.cell1} ${styles.bigWhite}`}>
          <FirmFactCard
            variant="default"
            state="initial"
            content="This is a two line button that terminates with..."
          />
        </div>

        <div className={styles.cell2}>
          <FirmFactCard
            variant="default"
            state="initial"
            content="This is a two line button that terminates with..."
          />
        </div>

        <div className={styles.cell3}>
          <FirmFactCard
            variant="default"
            state="initial"
            content="This is a one line button"
          />
        </div>

        <div className={styles.cell4}>
          <FirmFactCard
            variant="default"
            state="initial"
            content="This is a two line button that terminates with..."
          />
        </div>

        <div className={styles.cell5}>
          <FirmFactCard
            variant="default"
            state="initial"
            content="This is a two line button that terminates with..."
          />
        </div>

        <div className={styles.cell6}>
          <FirmFactCard
            variant="border"
            state="disabled"
            content="This is a two line button that terminates with..."
          />
        </div>

        <div className={styles.cell7}>
         <FirmFactCard
            variant="border"
            state="initial"
            content="This is a two line button..."
            className={styles.specialCard7}
            isSpecialCard7={true}
         />
        </div>
      </div>
    </div>
  );
};

export default FirmFacts;
