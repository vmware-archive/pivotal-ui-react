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
    var image = (
      <img {...other} src={src} className={classnames({'img-responsive': responsive}, className)}>
        {children}
      </img>
    );

    return (href) ? <a href={href}>{image}</a> : image;
  }
});

module.exports = {Image};