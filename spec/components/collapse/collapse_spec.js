require('../spec_helper');
var {TestUtils} = React.addons;

describe('BaseCollapse', function() {
  var BsPanel, BaseCollapse, subject, bsPanel;
  beforeEach(function() {
    BsPanel = require('react-bootstrap/Panel');
    BaseCollapse = require('../../../components/collapse/collapse').BaseCollapse;

    subject = React.render((
      <BaseCollapse header="ima header">
        <h1>Child</h1>
      </BaseCollapse>
    ), root);

    bsPanel = TestUtils.findRenderedComponentWithType(subject, BsPanel);
  });

  it('creates a react-boostrap panel that is collapsable', function() {
    var props = bsPanel.props;
    expect(props.expanded).toBeFalsy();
    expect(props.header).toEqual('ima header');
    expect(props.collapsable).toBeTruthy();
    expect(props.children).toEqual(subject.props.children);
  });

  describe('#handleSelect', function() {
    it('updates the props of the bsPanel', function() {
      subject.handleSelect();
      expect(bsPanel.props.expanded).toBeTruthy();
      subject.handleSelect();
      expect(bsPanel.props.expanded).toBeFalsy();
    });
  });

  describe('when the divider property is set to true', function() {
    beforeEach(function() {
      subject = React.render((
        <BaseCollapse header="ima header" divider>
          <h1>Child</h1>
        </BaseCollapse>
      ), root);
      bsPanel = TestUtils.findRenderedComponentWithType(subject, BsPanel);
    });

    it('wraps the body content in the panel-body-accordion-divider class', function() {
      expect(TestUtils.findRenderedDOMComponentWithClass(subject, 'panel-divider')).toBeTruthy();
    });
  });
});

describe('Collapse', function() {
  var Collapse, subject;
  beforeEach(function() {
    Collapse = require('../../../components/collapse/collapse').Collapse;

    subject = TestUtils.renderIntoDocument(
      <Collapse header="ima header">
        <h1>Child</h1>
      </Collapse>
    );
  });

  it('contains a right-caret as its collapsed icon', function() {
    var collapsedIconContainer = TestUtils.findRenderedDOMComponentWithClass(subject, 'when-collapsed-inline');
    expect(TestUtils.findRenderedDOMComponentWithClass(collapsedIconContainer, 'fa-caret-right')).toBeTruthy();
  });

  it('contains a down-caret as its collapsed icon', function() {
    var expandedIconContainer = TestUtils.findRenderedDOMComponentWithClass(subject, 'when-expanded-inline');
    expect(TestUtils.findRenderedDOMComponentWithClass(expandedIconContainer, 'fa-caret-down')).toBeTruthy();
  });
});

describe('AltCollapse', function() {
  var AltCollapse, subject;
  beforeEach(function() {
    AltCollapse = require('../../../components/collapse/collapse').AltCollapse;

    subject = React.render((
      <AltCollapse header="ima header">
        <h1>Child</h1>
      </AltCollapse>
    ), root);
  });

  it('contains a plus as its collapsed icon', function() {
    var collapsedIconContainer = TestUtils.findRenderedDOMComponentWithClass(subject, 'when-collapsed-inline');
    expect(TestUtils.findRenderedDOMComponentWithClass(collapsedIconContainer, 'fa-plus-square')).toBeTruthy();
  });

  it('contains a minus as its collapsed icon', function() {
    var expandedIconContainer = TestUtils.findRenderedDOMComponentWithClass(subject, 'when-expanded-inline');
    expect(TestUtils.findRenderedDOMComponentWithClass(expandedIconContainer, 'fa-minus-square')).toBeTruthy();
  });
});

describe('BaseCollapse behavior', function() {
  var BaseCollapse;

  beforeEach(function() {
    BaseCollapse = require('../../../components/collapse/collapse').BaseCollapse;

    jasmine.clock().install();

    React.render((
      <BaseCollapse header="This is my heading">
        Collapse contents!
      </BaseCollapse>
    ), root);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    React.unmountComponentAtNode(root);
  });

  it('allows for expanding and collapsing of contents', function() {
    jasmine.clock().tick(500);
    expect($('.panel-collapse').height()).toEqual(0);
    expect('#root a').toHaveText('This is my heading');
    $('#root a').simulate('click');

    jasmine.clock().tick(500);
    expect($('.panel-collapse').height()).toBeGreaterThan(0);
    expect('#root a').toHaveText('This is my heading');
    $('#root a').simulate('click');

    jasmine.clock().tick(500);
    expect($('.panel-collapse').height()).toEqual(0);
    expect('#root a').toHaveText('This is my heading');
  });
});