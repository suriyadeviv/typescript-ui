import React, { useState } from 'react';
import styles from './product-information.module.css'
import RightArrow from '../../images/right-arrow.svg';
import xss from 'xss';

interface ReadMoreProps {
  content: string;
  limit: number;
}

const ProductInformation = ({ content, limit} : ReadMoreProps ) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sanitizedContent = xss(content);
  const truncatedContent = `${sanitizedContent.substring(0, limit)}...`;

  const openReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <div>
    <h2>Product information</h2>
  </div>
    <div
    dangerouslySetInnerHTML={{
          __html: isExpanded ? sanitizedContent : truncatedContent,
        }}/>
    <div className={styles.accordion}>
      <button aria-label="readmore" className={styles.accordionTitle} onClick={openReadMore}>
      {isExpanded ? 'Show Less' : 'Read More'} <RightArrow className={styles.chevron} />
      </button>
    </div>
    </>
  );
};

export default ProductInformation;