import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// react doesn't like some of the props that are set on native components
// (that eventually are set on DOM nodes, so suppress those warnings)
const suppressedErrors = /(Invalid value for prop %s on <%s> tag|Received `%s` for a non-boolean attr|Use PascalCase for React components|React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser)/
// eslint-disable-next-line no-console
const realConsoleError = console.error
// eslint-disable-next-line no-console
console.error = message => {
  if (message.match(suppressedErrors)) {
    return
  }
  realConsoleError(message)
}

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });

// fake time
// see https://github.com/facebook/jest/issues/4359
jest.useFakeTimers()