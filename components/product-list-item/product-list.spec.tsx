import ProductListItem from "./product-list-item";
import { render, screen } from "@testing-library/react"


describe("ProductListItem", () => {
it('render product list',() => {
  const item = {
    title: "test product",
    price: "£449.00",
    image: "//johnlewis.scene7.com/is/image/JohnLewis/239968647alt1"
  }

  render(<ProductListItem image={item.image} price={item.price} description={item.title} />);
  expect(screen.getByText('£449.00')).toHaveTextContent(item.price);
}) })
;
