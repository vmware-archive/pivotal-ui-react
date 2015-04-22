var React = require('react');

/**
 * @component Ribbon
 * @description Flashy text used to call out access, status, environment, etc.
 *
 * @example ```js
 * var RadioGroup = require('pui-react-ribbons').Ribbon;
 * var MyComponent = React.createClass({
 *   render() {
 *     return <Ribbon>Acceptance Environment</Ribbon>
 *   }
 * });
 * ```
 *
 * @see [Pivotal UI React](http://styleguide.pivotal.io/react_beta.html#ribbons_react)
 * @see [Pivotal UI CSS](http://styleguide.pivotal.io/elements.html#ribbon)
 */
var Ribbon = React.createClass({
  render() {
    return <div className="inline-ribbon">{this.props.children}</div>;
  }
});

/**
 * @component PrimaryRibbon
 * @description A `<Ribbon>` with an emphasized background color
 *
 * @see [Pivotal UI React](http://styleguide.pivotal.io/react_beta.html#ribbons_react)
 * @see [Pivotal UI CSS](http://styleguide.pivotal.io/elements.html#ribbon)
 */
var PrimaryRibbon = React.createClass({
  render() {
    return <div className="inline-ribbon ribbon-primary">{this.props.children}</div>;
  }
});

/**
 * @component Banner
 * @description A larger, emphasized `<Ribbon>`
 *
 * @see [Pivotal UI React](http://styleguide.pivotal.io/react_beta.html#ribbons_react)
 * @see [Pivotal UI CSS](http://styleguide.pivotal.io/elements.html#ribbon)
 */
var Banner = React.createClass({
  render() {
    return <div className="ribbon-banner">{this.props.children}</div>;
  }
});

module.exports = {Ribbon, PrimaryRibbon, Banner};
