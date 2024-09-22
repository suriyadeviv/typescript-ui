
import { render, screen } from "@testing-library/react"
import ProductCarousel from "./product-carousel";
import data from '../../mockData/product-detail-5561997.json'

describe("ProductCarousel", () => {
  it('render ProductCarousel', () => {
    render(<ProductCarousel images={data.media.images}/>);
    const renderedImages = screen.getAllByRole('img');
    expect(renderedImages).toHaveLength(data.media.images.urls.length);
  })
})
  ;
