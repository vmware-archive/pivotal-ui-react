# pivotal-ui-react.media

Displays a media object (images, video, or audio) to the left or right of a block of content.

For more detailed usage information, see the [style guide](http://styleguide.cfapps.io/react_beta.html#media_react).

You'll need to pass in an image, most likely an [Image](http://styleguide.cfapps.io/react_beta.html#image_react) component.

```js
var MyComponent = React.createClass({
  render: function() {
    var Media = require('pivotal-ui-react.media').Media;
    var Image = require('pivotal-ui-react.image').Image;
    
    var image = (<Image src="http://placehold.it/50x50"/>);
    return (<Media leftImage={image}>content</Media>);
  }
});
```

## Properties

Property            | Values                                         | Description
------------------- | ---------------------------------------------- | --------------------------------------------------------------------------
`leftImage`         | DOM Node                                       | Image, Video, or Audio to the left of the content
`rightImage`        | DOM Node                                       | Image, Video, or Audio to the right of the content
`bodyAlignment`     | top (default), "middle", "bottom"              | Vertical alignment of the body (used for large images with small content next to it, usually centered)
`stackSize    `     | "xsmall", "small", "medium", "large"           | At what breakpoint should the media object stack
`leftMediaSpacing`  | "small", "medium", "large" (default), "xlarge" | Spacing to the left of the media
`rightMediaSpacing` | "small", "medium", "large" (default), "xlarge" | Spacing to the right of the media


*****************************************

This is a component of Pivotal UI React.

[Styleguide](http://styleguide.pivotal.io/react_beta.html)
[Github](https://github.com/pivotal-cf/pivotal-ui-react)

All Pivotal UI Components require ReactJS (0.12.x)

(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.
