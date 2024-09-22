import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ProductListItem from "../components/product-list-item/product-list-item";
import { GetServerSidePropsResult } from "next";
import productData from '../mockData/productSearch.json'
import NotFound from "./404";

interface Props {
  data: {
    products: {
      image: string;
      productId: string;
      title: string;
      variantPriceRange: {
        display: {
          max: string;
        }
      }
    }[]
  }
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
  try {
    const data = productData
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    <NotFound />
  }
}

const Home = ({ data }: Props) => {
  let items = data?.products.slice(0, 20);
  return (
    <div>
      <Head>
        <title>JL &amp; Partners | Home</title>
        <meta name="keywords" content="shopping" />
        <meta name="description" content="List of Dishwashers" />
      </Head>
      <div>
        <h1>Dishwashers ({data?.products.length})</h1>
        <div className={styles.content}>
          {items.map((item) => (
            <Link
              key={item.productId}
              href={{
                pathname: "/product-detail/[id]",
                query: { id: item.productId },
              }}
            >
              <a className={styles.link}>
                <div className={styles.contentItem}>
                  <ProductListItem image={item.image} price={item.variantPriceRange.display.max} description={item.title} />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
