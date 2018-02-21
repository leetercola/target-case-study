import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import {shallow} from "enzyme";
import expect from "expect";
import 'bootstrap/dist/css/bootstrap.css';

import App from '../App';
import ItemData from '../item-data.json';

const stories = storiesOf('App', module);

stories.add('Full page render', function () {
  const story = <App ItemData={ItemData.CatalogEntryView[0]} />

  specs(() => describe('Full page render', function () {
    it('should render without crashing', function () {
      let output = shallow(story);
      expect(output).toBeTruthy();
    });
  }));

  return story;
});