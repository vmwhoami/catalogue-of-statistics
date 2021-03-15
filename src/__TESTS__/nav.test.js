import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

it('renders Nav correctly', () => {
  const tree = renderer.create(< Nav handleOnSelect={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});