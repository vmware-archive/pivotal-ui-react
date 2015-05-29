var EventEmitter = require('node-event-emitter');
var React = require('react');
var warning = require('react/lib/warning');

var types = React.PropTypes;

var destinationPortals = {};
var emitter = new EventEmitter();

function createRoot(reactElement) {
  var destination = document.createElement('div');
  reactElement.getDOMNode().appendChild(destination);
  return destination;
}

function reset() {
  emitter.removeAllListeners();
  destinationPortals = {};
}

/**
 * @component PortalSource
 * @description HTML Rendered to PortalSource will be transported to PortalDestination
 *
 * @property name {String} Name for linking source and destination portals
 *
 * @example ```js
 * var PortalSource = require('pui-react-portals').PortalSource;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <PortalSource name="modal">
 *         Modal Content
 *       </PortalSource>
 *     );
 *   }
 * });
 * ```
 *
 * @see [Pivotal UI React](http://styleguide.pivotal.io/react_beta.html)
 */

var PortalSource = React.createClass({
  propTypes: {
    name: types.string.isRequired
  },

  getInitialState() {
    return {destination: null};
  },

  componentWillMount() {
    emitter.on('destination', this.setDestination);
    this.componentDidUpdate();
  },

  componentWillUnmount() {
    emitter.removeListener('destination', this.setDestination);
    var {root} = this.state.destination || {};
    if(root) {
      root.parentNode.removeChild(root);
    }
  },

  setDestination() {
    var {destination} = this.state;
    var destinationPortal = destinationPortals[this.props.name];
    if (!this.isMounted() || (destination && destination.portal === destinationPortal)) return;
    this.setState({destination: destinationPortal && {portal: destinationPortal, root: createRoot(destinationPortal)}});
  },

  componentDidUpdate() {
    var {root} = this.state.destination || {};
    if (root) React.render(<div>{this.props.children}</div>, root);
  },

  render() {
    return null;
  }
});


/**
 * @component PortalDestination
 * @description HTML Rendered to PortalSource will be transported to PortalDestination
 *
 * @property name {String} Name for linking source and destination portals
 *
 * @example ```js
 * var PortalDestination = require('pui-react-portals').PortalDestination;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <body>
 *         <div>Main Content</div>
 *         <PortalDestination name="modal"/>
 *       </body>
 *     );
 *   }
 * });
 * ```
 *
 * @see [Pivotal UI React](http://styleguide.pivotal.io/react_beta.html)
 */

var PortalDestination = React.createClass({
  propTypes: {
    name: types.string.isRequired
  },

  componentDidMount() {
    var {name} = this.props;
    if (name in destinationPortals) {
      warning(false, `Multiple destination portals with the same name "${name}" detected.`);
    }

    destinationPortals[name] = this;
    emitter.emit('destination', this);
  },

  componentWillUnmount() {
    delete destinationPortals[this.props.name];
    emitter.emit('destination', this);
  },

  render() {
    return (<div/>);
  }
});

module.exports = {
  PortalSource,
  PortalDestination,
  reset
};
