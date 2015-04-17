require('../spec_helper');

describe('Dropdowns', function() {
  describe('Dropdown', function() {
    beforeEach(function() {
      var Dropdown = require('../../../components/dropdowns/dropdowns').LinkDropdown;
      React.render(<Dropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-link').toContainText('Dropping');
    });
  });

  describe('LinkDropdown', function() {
    beforeEach(function() {
      var LinkDropdown = require('../../../components/dropdowns/dropdowns').LinkDropdown;
      React.render(<LinkDropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-link').toContainText('Dropping');
    });
  });

  describe('DefaultAltDropdown', function() {
    beforeEach(function() {
      var DefaultAltDropdown = require('../../../components/dropdowns/dropdowns').DefaultAltDropdown;
      React.render(<DefaultAltDropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-default-alt').toContainText('Dropping');
    });
  });

  describe('PrimaryDropdown', function() {
    beforeEach(function() {
      var PrimaryDropdown = require('../../../components/dropdowns/dropdowns').PrimaryDropdown;
      React.render(<PrimaryDropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-primary').toContainText('Dropping');
    });
  });

  describe('LowlightDropdown', function() {
    beforeEach(function() {
      var LowlightDropdown = require('../../../components/dropdowns/dropdowns').LowlightDropdown;
      React.render(<LowlightDropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-lowlight').toContainText('Dropping');
    });
  });

  describe('DangerDropdown', function() {
    beforeEach(function() {
      var DangerDropdown = require('../../../components/dropdowns/dropdowns').DangerDropdown;
      React.render(<DangerDropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-danger').toContainText('Dropping');
    });
  });

  describe('HighlightDropdown', function() {
    beforeEach(function() {
      var HighlightDropdown = require('../../../components/dropdowns/dropdowns').HighlightDropdown;
      React.render(<HighlightDropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-highlight').toContainText('Dropping');
    });
  });

  describe('HighlightAltDropdown', function() {
    beforeEach(function() {
      var HighlightAltDropdown = require('../../../components/dropdowns/dropdowns').HighlightAltDropdown;
      React.render(<HighlightAltDropdown title="Dropping"/>, root);
    });

    afterEach(function() {
      React.unmountComponentAtNode(root);
    });

    it('creates a dropdown', function() {
      expect('button.dropdown-toggle.btn.btn-highlight-alt').toContainText('Dropping');
    });
  });
});
