import React from 'react';
import styles from './index.module.less';
import { Chart1, Chart2, Chart3, Chart4, Chart5, Chart6 } from './components/Charts';

function Main() {
  return (
    <div className={styles.flex}>
      <div className={styles.column}>
        {/* <Card className={styles['area-1-1']}> */}
        <div className={styles['area-1-1']}>
          <Chart1 />
        </div>
        <div className={styles['area-1-4']}>
          <Chart4 />
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles['area-1-2']}>
          <Chart2 />
        </div>
        <div className={styles['area-1-5']}>
          <Chart5 />
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles['area-1-3']}>
          <Chart3 />
        </div>
        <div className={styles['area-1-6']}>
          <Chart6 />
        </div>
      </div>
    </div>
  );
}

export default Main;
