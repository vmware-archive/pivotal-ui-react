require('../spec_helper');

describe('Ribbon', function() {
  beforeEach(function() {
    var Ribbon = require('../../../components/ribbons/ribbons').Ribbon;
    React.render(<Ribbon>British</Ribbon>, root);
  });

  afterEach(function() {
    React.unmountComponentAtNode(root);
  });

  it('renders a inline ribbon', function() {
    expect('.inline-ribbon').toHaveText('British');
    expect('.inline-ribbon').not.toHaveClass('ribbon-primary');
  });
});

describe('PrimaryRibbon', function() {
  beforeEach(function() {
    var PrimaryRibbon = require('../../../components/ribbons/ribbons').PrimaryRibbon;
    React.render(<PrimaryRibbon>British</PrimaryRibbon>, root);
  });

  afterEach(function() {
    React.unmountComponentAtNode(root);
  });

  it('adds the ribbon-primary class', function() {
    expect('.inline-ribbon').toHaveText('British');
    expect('.inline-ribbon').toHaveClass('ribbon-primary');
  });
});


describe('Banner', function() {
  beforeEach(function() {
    var Banner = require('../../../components/ribbons/ribbons').Banner;
    React.render(<Banner>British</Banner>, root);
  });

  afterEach(function() {
    React.unmountComponentAtNode(root);
  });

  it('renders a Banner', function() {
    expect('.ribbon-banner').toHaveText('British');
    expect('.ribbon-banner').not.toHaveClass('ribbon-primary');
  });
});
