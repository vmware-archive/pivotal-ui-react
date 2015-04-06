#Dr Frankenstyle

a.k.a css-resolver, recssolver, pui-builder, monty, css-dependency-resolver

To compile your css from your dependencies.

```js
gulp.task('buildCss', function() {
  var DrFrankenstyle = require('dr-frankenstyle');
  DrFrankenstyle(function(css) {
    fs.writeFileSync(path.resolve('components.css'), css);
  });
});
```

(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.