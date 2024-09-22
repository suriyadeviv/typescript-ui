import { imagehost } from "../constants/constants";
import styles from "./product-list-item.module.scss";
import Image from 'next/image';

interface Props {
  image: string;
  price: string;
  description: string;
}

const ProductListItem = ({ image, price, description }: Props) => {
  const imageUrl =  imagehost + image;
  return (
    <div className={styles.content}>
      <div>
      <Image
        src={imageUrl}
        alt={imageUrl}
        layout="responsive"
        width={300}
        height={350}
        className={styles.listImage}
      />
      </div>
      <div>{description}</div>
      <div className={styles.price}>{price}</div>
    </div>
  );
};

export default ProductListItem;
