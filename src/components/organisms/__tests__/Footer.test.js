import {render, screen} from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('should display conversion credits', () => {
    render(<Footer/>);

    const expectedResult = 'Units conversion rules provided by ISA';

    expect(screen.getByRole('contentinfo')).toHaveTextContent(expectedResult);
  });
});
