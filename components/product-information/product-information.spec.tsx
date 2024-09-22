
import { render, screen } from "@testing-library/react"
import ProductInformation from "./product-information";
import data from '../../mockData/product-detail-5561997.json'

describe("ProductInformation", () => {
  it('render ProductInformation', () => {
    render(<ProductInformation content={data.details.productInformation} limit={150} />);
    expect(
      screen.getByText('Read More')
    ).toBeInTheDocument();
  })
})
  ;
