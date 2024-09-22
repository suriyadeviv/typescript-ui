import { render, screen } from "@testing-library/react"
import Home, { getServerSideProps } from "./index";
import productData from '../mockData/productSearch.json';

describe('Product List', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  const mockData = {
    products: productData.products.slice(0, 20),
  };

  it('should show the count of products', async () => {
    render(<Home data={mockData} />);
    expect(screen.getByText('Dishwashers (20)')).toBeInTheDocument();
  });

  it('renders products', () => {
    render(<Home data={mockData} />);
    const productItems = screen.getAllByRole('link');
    expect(productItems).toHaveLength(20);
  });
});

describe('getServerSideProps', () => {
  test('fetches product data correctly', async () => {
    const result = await getServerSideProps();
    expect(result).toEqual({
      props: {
        data: productData,
      },
    });
  });
});
