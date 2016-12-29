import { jsdom } from 'jsdom';
import chai from 'chai';
const { expect } = chai;
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

global.expect = expect;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.React = React;
global.sinon = sinon;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.documentRef = document;
