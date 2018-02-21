import { storiesOf, setAddon } from '@storybook/react';
import ReactTestRenderer from 'react-test-renderer';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';

export const snapshot = (name, story) => {
    it(name, function () {
      let renderer = require("react-test-renderer");
      const tree = renderer.create(story).toJSON();
      expect(tree).toMatchSnapshot();
    });
};

export default {
    storiesOf,
    specs,
    describe,
    it,
    expect,
    snapshot,
    ReactTestRenderer
};