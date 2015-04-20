var classnames = require('classnames');
var React = require('react');
var types = React.PropTypes;

var Image = React.createClass({
  propTypes: {
    responsive: types.bool,
    href: types.string,
    src: types.string.isRequired
  },

  render() {
    var {responsive, href, src, children, className, ...other} = this.props;
    var classes = classnames({'img-responsive': responsive}, className);

    var image = <img {...other} src={src} className={classes}>{children}</img>;
    return href ? <a {...{href}}>{image}</a> : image;
  }
});

module.exports = {Image};