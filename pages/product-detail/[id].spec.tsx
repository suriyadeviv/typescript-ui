import ProductDetail, { getServerSideProps } from "./[id]";
import { GetServerSidePropsContext } from "next";
import { render, screen } from "@testing-library/react"
import data from '../../mockData/product-detail-5561997.json'

describe('Product Details', () => {
  it('should have product title', async () => {
    render(<ProductDetail data={data} />);
    expect(screen.getByText('Bosch Serie 2 SMV2ITX18G Fully Integrated Dishwasher')).toBeInTheDocument();
  });

  it('render product information', () => {
    render(<ProductDetail data={data} />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Product information' })
    ).toBeVisible();
  });
});

describe('getServerSideProps', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should call getServerSideProps', async () => {
    const context = {
      params: { id: '123' },
    } as unknown as GetServerSidePropsContext;

    const productData = { id: '123', name: 'Test Product' };
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(productData),
    });
    const result = await getServerSideProps(context);

    expect(result).toEqual({
      props: { data: productData },
    });
  });
});
