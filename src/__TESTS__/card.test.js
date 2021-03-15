import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../components/Card';

it('renders Card correctly', () => {

  const coin = {
    id: 'BTC',
    name: 'Bitcoin',
    price: 6000.21,

  };
  const tree = renderer.create(<Card coin={coin} />);
  expect(tree).toMatchSnapshot();
});