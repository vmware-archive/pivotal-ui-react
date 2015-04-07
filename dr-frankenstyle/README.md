#Dr Frankenstyle

Dr Frankenstyle is a tool that resolves CSS dependencies between node packages. If your app 
needs both buttons and tooltips, install the button and tooltip node modules:

```sh
npm install pui-css-buttons --save
npm install pui-css-tooltips --save
```
You'll notice both have been added to your `package.json`.

Both buttons and tooltips depend on `pui-css-typography`, which depends on `pui-css-bootstrap`.
 
Dr. Frankenstyle will read the dependency tree from `npm list` and find all of the required CSS files
(indicated by packages with the `style` key). It will then create a single CSS file in the correct 
cascade order and without duplication. In this case the files would be included in the following order:

1. Bootstrap
1. Typography
1. Buttons
1. Tooltips

##Usage

First, install Dr. Frankenstyle:

```sh
npm install dr-frankenstyle
```

Next, add a gulp task in your `gulpfile.js` to create the compiled CSS file.

```js
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

gulp.task('buildCss', function() {
  var DrFrankenstyle = require('dr-frankenstyle');
  DrFrankenstyle(function(css) {
    fs.writeFileSync(path.resolve('public', 'components.css'), css);
  });
});
```

Run the gulp task:

```sh
gulp buildCss
```

This should create a file `public/components.css` (feel free to change the directory). 
If you serve `components.css`, you can consume it in your html.

```html
<link rel="stylesheet" type="text/css" href="components.css"/>
```

If you add or remove node modules that require css, 
run `gulp buildCss` again to update the css.


a.k.a css-resolver, recssolver, pui-builder, monty, css-dependency-resolver, css-buffet, css-builder

(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.