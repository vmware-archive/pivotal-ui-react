var {UIButton} = require('../../../components/buttons/buttons');

describe('UIButton', function() {
  beforeEach(function() {
    React.render(<UIButton>Click here</UIButton>, root);
  });

  afterEach(function() {
    React.unmountComponentAtNode(root);
  });

  it('creates a button', function() {
    expect('#root button.btn.btn-default').toContainText('Click here');
  });

  describe('when href attribute is set', function() {
    beforeEach(function() {
      React.render(<UIButton href="http://example.com">Click here</UIButton>, root);
    });

    it('creates a link', function() {
      expect('#root a.btn.btn-default').toContainText('Click here');
      expect('#root a.btn').toHaveAttr('href', 'http://example.com');
    });
  });

  describe('when type attribute is set', function() {
    beforeEach(function(){
      React.render(<UIButton type="danger">Click here</UIButton>, root);
    });

    it('adds the type class to the button', function() {
      expect('#root button.btn').not.toHaveClass('btn-default');
      expect('#root button.btn').toHaveClass('btn-danger');
    });
  });

  describe('when block is true', function() {
    beforeEach(function(){
      React.render(<UIButton block={true}>Click here</UIButton>, root);
    });

    it('adds the block class', function() {
      expect('#root button.btn').toHaveClass('btn-block');
    });
  });

  describe('when large is true', function() {
    beforeEach(function(){
      React.render(<UIButton large={true}>Click here</UIButton>, root);
    });

    it('adds the large button class', function() {
      expect('#root button.btn').toHaveClass('btn-lg');
    });
  });

  describe('when data-attributes are provided', function() {
    beforeEach(function(){
      React.render(
        <UIButton data-click="myFunction" data-foo="bar">
          Click here
        </UIButton>, root
      );
    });

    it('passes through the data-attributes', function() {
      expect('#root button.btn').toHaveAttr('data-click', 'myFunction');
      expect('#root button.btn').toHaveAttr('data-foo', 'bar');
    });
  });
});
