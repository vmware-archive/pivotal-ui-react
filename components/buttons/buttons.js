var React = require('react/addons');
var classnames = require('classnames');

var ButtonMixin = {
  propTypes: {
    block: React.PropTypes.bool,
    href: React.PropTypes.string,
    kind: React.PropTypes.oneOf([
      'default',
      'default-alt',
      'primary',
      'lowlight',
      'danger',
      'highlight',
      'highlight-alt'
    ]),
    large: React.PropTypes.bool
  }
};

var UIButton = React.createClass({
  mixins: [ButtonMixin],

  render: function () {
    var {block, href, large, kind, children, ...others} = this.props;

    var classes = classnames(
      'btn',
      {
        'btn-block': block,
        'btn-lg': large
      },
      kind ? 'btn-' + kind : 'btn-default'
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
  });
}

var DefaultButton = createButton({kind: 'default'});
var DefaultAltButton = createButton({kind: 'default-alt'});
var PrimaryButton = createButton({kind: 'primary'});
var LowlightButton = createButton({kind: 'lowlight'});
var DangerButton = createButton({kind: 'danger'});
var HighlightButton = createButton({kind: 'highlight'});
var HighlightAltButton = createButton({kind: 'highlight-alt'});

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
