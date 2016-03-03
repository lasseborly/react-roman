var React =  require('react');
var expect = require('expect');
var createRenderer = require('react-addons-test-utils').createRenderer;

var Roman = require ('../lib/Roman.js');

describe('Roman', () => {
  it('Renders', () => {
    var RomanFactory = React.createFactory(Roman);
    var renderer = createRenderer();

    renderer.render(RomanFactory({ number: 512 }));
    var actualElement = renderer.getRenderOutput();

    var expectedElement = React.DOM.span(null, "DXII");

    expect(actualElement).toEqual(expectedElement);
  });
});
