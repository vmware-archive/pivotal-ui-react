var React = require('react/addons');
var classnames = require('classnames');

var ButtonMixin = {
  propTypes: {
    block: React.PropTypes.bool,
    href: React.PropTypes.string,
    large: React.PropTypes.bool,
    type: React.PropTypes.oneOf([
      'default',
      'default-alt',
      'primary',
      'lowlight',
      'danger',
      'highlight',
      'highlight-alt'
    ])
  }
};

var UIButton = React.createClass({
  mixins: [ButtonMixin],

  render: function () {
    var {block, href, large, type, children, ...others} = this.props;

    var classes = classnames(
      'btn',
      {
        'btn-block': block,
        'btn-lg': large
      },
      type ? 'btn-' + type : 'btn-default'
    );

    return href ?
      (<a {...others} className={classes} href={href}>{children}</a>) :
      (<button {...others} className={classes}>{children}</button>);
  }
});

function createButton(propOverrides) {
  return React.createClass({
    mixins: [ButtonMixin],
    render: function() {
      return (<UIButton {...this.props} {...propOverrides} />);
    }
  })
}

var DefaultButton = createButton({type: 'default'});
var DefaultAltButton = createButton({type: 'default-alt'});
var PrimaryButton = createButton({type: 'primary'});
var LowlightButton = createButton({type: 'lowlight'});
var DangerButton = createButton({type: 'danger'});
var HighlightButton = createButton({type: 'highlight'});
var HighlightAltButton = createButton({type: 'highlight-alt'});

module.exports = {
  UIButton: UIButton,
  DefaultButton: DefaultButton,
  DefaultAltButton: DefaultAltButton,
  PrimaryButton: PrimaryButton,
  LowlightButton: LowlightButton,
  DangerButton: DangerButton,
  HighlightButton: HighlightButton,
  HighlightAltButton: HighlightAltButton
};
