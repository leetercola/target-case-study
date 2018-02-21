import { configure } from '@storybook/react';
import {configure as enzymeConfig} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzymeConfig({ adapter: new Adapter() });

const req = require.context('../src/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);