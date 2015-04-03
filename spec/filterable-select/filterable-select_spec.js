require('../spec_helper');

describe('filterable-select', function() {
  beforeEach(function() {
    var FilterableSelect = require('../../src/filterable-select/filterable-select').FilterableSelect;
    var options = [
      'foo',
      'bar',
      'baz'
    ];
    React.render(<FilterableSelect placeholder="Select an Item" options={options}></FilterableSelect>, root);
  });

  afterEach(function() {
    React.unmountComponentAtNode(root);
  });

  it('shows the placeholder text', function() {
    expect('.trigger').toHaveAttr('placeholder', 'Select an Item');
  });

  describe('clicking on the select box', function() {
    beforeEach(function() {
      $('.trigger').simulate('click');
    });

    it('shows a list of all the options', function() {
      expect('.option:eq(0)').toHaveText('foo');
      expect('.option:eq(1)').toHaveText('bar');
      expect('.option:eq(2)').toHaveText('baz');
    });
  });

  describe('text not shown until clicked', function() {
    it('does not show the options', function() {
      expect('.option:eq(0)').not.toExist();
      expect('.option:eq(1)').not.toExist();
      expect('.option:eq(2)').not.toExist();
    });
  });

  describe('when an option is clicked', function() {
    beforeEach(function() {
      $('.trigger').simulate('click');
      $('.option:eq(0)').simulate('click');
    });

    it('should show the option in the input', function() {
      expect('.trigger').toHaveValue('foo');
    });
  });
});