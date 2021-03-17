import React from 'react';
import renderer from 'react-test-renderer';
import About from '../components/About';

it('renders Footer correctly', () => {
  const tree = renderer.create(<About />);
  expect(tree).toMatchSnapshot();
});
