// src/components/Spinner.tsx

import React from 'react';
import styles from '../scss/module/spinner.module.scss';

const SpinnerComponent: React.FC = () => {
  return (
    <div className={styles.spinner_wrapper}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default SpinnerComponent