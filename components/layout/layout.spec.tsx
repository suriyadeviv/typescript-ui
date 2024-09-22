
import { render, screen } from "@testing-library/react"
import Layout from './layout';

describe("Layout", () => {
  it('render Layout', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(screen.getByRole('main').parentElement).toHaveClass('content');
    expect(screen.getByRole('main')).toHaveClass('main');
  })
})
  ;
