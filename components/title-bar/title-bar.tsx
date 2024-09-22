import React from 'react';
import { useRouter } from 'next/router';
import styles from './title-bar.module.css';
import LeftArrow from '../../images/left-arrow.svg';

const TitleBar = ({ title }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.titleContainer}>
        <button aria-label="Back" className={styles.backButton} onClick={handleBackClick}>
      <LeftArrow className={styles.chevron} />
      </button>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default TitleBar;
