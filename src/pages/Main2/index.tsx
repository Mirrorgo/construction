import React from 'react';
import styles from './index.module.less';
import { Chart1, Chart2, Chart3, Chart4 } from './components/Charts';

function Main2() {
  return (
    <div>
      <div className={styles.flex}>
        <div className={styles['area-1-1']}>
          <Chart1 />
        </div>
        <div className={styles['area-1-2']}>
          <Chart2 />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles['area-1-3']}>
          <Chart3 />
        </div>
        <div className={styles['area-1-4']}>
          <Chart4 />
        </div>
      </div>
    </div>
  );
}

export default Main2;
