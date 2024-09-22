import TitleBar from "./title-bar";
import { render, screen } from "@testing-library/react"


describe("TitleBar", () => {
it('render title bar',() => {
  const data = {
    title: "test product",
  }

  render(<TitleBar title={data.title}/>);
  expect(
    screen.getByText('test product')
  ).toBeInTheDocument();
}) })
;
