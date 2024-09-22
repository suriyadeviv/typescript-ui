import { GetServerSidePropsResult } from "next";
import ProductCarousel from "../../components/product-carousel/product-carousel";
import styles from '../index.module.scss'
import ProductInformation from "../../components/product-information/product-information";
import Head from "next/head";
import TitleBar from "../../components/title-bar/title-bar";
import { productEndpoint } from "../../components/constants/constants";
import NotFound from "../404";

interface Props {
  data: {
    title: string;
    code: string;
    media: {
      images: {
        urls: string[];
      }
    }
    price: {
      now: string;
    }
    displaySpecialOffer: string;
    additionalServices: {
      includedServices: string[];
    }
    details: {
      features: {
        attributes: {
          name: string;
          value: string;
        }[]
      }[],
      productInformation: string;
    }
  };
}

export async function getServerSideProps(context): Promise<GetServerSidePropsResult<Props>> {
  try {
  const id = context.params.id;
  const response = await fetch(
    productEndpoint + id,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': '123',
      },
    }
  );
  const data = await response.json();

  return {
    props: { data },
  };
} catch (error) {
  <NotFound/>
}
}

const ProductDetail = ({ data }: Props) => {
  return (
    data && (<div>
      <Head>
        <title>JL &amp; Partners | Product</title>
        <meta name="keywords" content="shopping" />
        <meta name="description" content={`Details about ${data.title}`} />
      </Head>
      <TitleBar title={data.title} />
      <div>
        <div className={styles.productDetailsContainer}>
          <div className={styles.leftSide}>
            <ProductCarousel images={data.media?.images} />
            <div className={styles.divider}></div>
          </div>
          <div tabIndex={0} className={styles.productDeal}>
            <div tabIndex={0} className={styles.priceNow}>
              <div tabIndex={0} ><span>£{data.price?.now}</span></div>
            </div>
            {data.displaySpecialOffer && (<div tabIndex={0} className={styles.displaySpecialOffer}>
              <span>{data.displaySpecialOffer}</span>
            </div>
            )}
            {data.additionalServices?.includedServices && (<div tabIndex={0} className={styles.displayGuarantee}>
              <span>{data.additionalServices.includedServices}</span>
            </div>
            )}
          </div>
          <div className={styles.leftSide}>
            <div tabIndex={0} className={styles.productDetails}>
              <ProductInformation content={data.details?.productInformation} limit={150} />
              <div tabIndex={0} className={styles.productCode}> {`Product code: ${data.code}`}</div>
              <div className={styles.productBorders}></div>

              <h3>Product specification</h3>
              <div className={styles.productSmallText} tabIndex={0}>
                {data.details?.features[0].attributes.map((attribute, index) => (
                  <div key={index} tabIndex={0}>
                    <div className={styles.productBorders}></div>
                    <div className={styles.attributeName}> {attribute.name}</div>
                    <div className={styles.attributeValue}> {attribute.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
  );
};

export default ProductDetail;
