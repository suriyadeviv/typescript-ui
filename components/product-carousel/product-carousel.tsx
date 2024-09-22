import styles from "./product-carousel.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { imagehost } from "../constants/constants";


interface Props {
  images: {
    urls: string[];
  }
}

const ProductCarousel = ({ images }: Props) => {
  return (
    <div className={styles.productCarousel}>
       <Carousel showArrows={false} 
      showIndicators={true} 
      showThumbs={false} 
      showStatus={false} 
      swipeable={true} >
        {images?.urls.map((src, index) => {
          return (
            <Image 
            key={index}
            src={imagehost + src}
            width={650}
            height={750}
            alt={`alt image of ${src}`}/>
          )

        } 
        )}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
