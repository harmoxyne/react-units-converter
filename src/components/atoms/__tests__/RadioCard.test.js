import {render, screen} from '@testing-library/react';
import RadioCard from '../RadioCard';

describe('<RadioCard />', () => {
  it('should display radio button', () => {
    render(<RadioCard/>);

    expect(screen.getByRole('radio')).toBeVisible();
  });

  it('should display text', () => {
    render(<RadioCard>expected</RadioCard>);

    expect(screen.getByText('expected')).toBeTruthy();
  })
});
