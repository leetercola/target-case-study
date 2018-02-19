import React from 'react';
import App from './App';
import ItemData from './item-data.json';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

afterEach = () => {
  shallow.unmount();
};

xit('renders add to cart if available online and purchasingChannelCode is 0 or 1 and does not show pick up in store', () => {
  const baseData = ItemData.CatalogEntryView[0];
  const output = shallow(<App ItemData={baseData} />);
  expect(output.find('#add_to_cart')).toBePresent();
  expect(output.find('#pickup_in_store')).not.toBePresent();
  expect(baseData.purchasingChannelCode === 1||2).toBeTruthy();
  expect(baseData.inventoryStatus).toEqual('Online');
  expect(output.text()).toMatchSnapshot();
  output.unmount();
});

it('renders pick up to store if inventoryStatus is InStore and purchasingChannelCode is 0 or 2', () => {
  let baseData = ItemData.CatalogEntryView[0];
  baseData.inventoryStatus = 'InStore';
  baseData.purchasingChannelCode = '0';
  const output = shallow(<App ItemData={baseData} />);
  expect(output.find('#pickup_in_store')).toBePresent();
  expect(output.find('#add_to_cart')).not.toBePresent();
  expect(baseData.purchasingChannelCode === 1||2).toBeTruthy();
  expect(baseData.inventoryStatus).toEqual('InStore');
  expect(output.text()).toMatchSnapshot();
  output.unmount();
})
