const jsdom = require('jsdom');
//  const  spa  = require('./index');
const { newHtml } = require('./structure');

const { JSDOM } = jsdom;

test('Returns a default HTML page', () => {
  const dom = new JSDOM(newHtml);
  const nav = dom.window.document.querySelector('nav');
  expect(nav).not.toBeFalsy();
  const form = dom.window.document.querySelector('form');
  expect(form).not.toBeFalsy();
  const section = dom.window.document.querySelector('section');
  expect(section).not.toBeFalsy();
  const button = dom.window.document.querySelector('button');
  expect(button).not.toBeFalsy();
  // expect(html).toHave('form');
});

// test('Returns a default HTML page', () => {
//     const dom = new JSDOM(newHtml);
//     const nav = dom.window.document.querySelector('nav');
//     expect(nav).not.toBeFalsy();
//   });
