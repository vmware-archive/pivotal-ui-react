var fs = require('fs');
var babel = require('babel');
var gulp = require('gulp');
var mkdirp = require('mkdirp');
var packageTemplate = require('../templates/package.json');
var path = require('path');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var through = require('through2');
const COPYRIGHT = '/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/\n';

gulp.task('watch', function() {
  gulp.watch('components/**/*.js', ['assets-javascript']);
  gulp.watch('components/**/*.json', ['assets-package-json']);
  gulp.watch('components/**/*.md', ['assets-readme']);
});

gulp.task('assets-javascript', function() {
  return gulp.src('components/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.babel({stage: 0}))
    .pipe(plugins.header(COPYRIGHT))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets-package-json', function(){
  return gulp.src('components/*')
    .pipe(plugins.plumber())
    .pipe(through.obj(function(folder, encoding, callback) {
      var name = path.basename(folder.path);
      var outputDir = path.resolve(__dirname, '..', 'dist', name);
      var jsonContents = {};
      try {
        jsonContents = JSON.parse(fs.readFileSync(path.resolve(folder.path, 'package.json'), 'utf8'));
      } catch(e) {}

      fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageTemplate(
        {
          name: `pui-react-${name}`,
          description: `${name}`,
          main: `${name}.js`
        },
        jsonContents
      ));

      callback();
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets-license', function(){
  return gulp.src('components/*')
    .pipe(plugins.plumber())
    .pipe(through.obj(function(folder, encoding, callback) {
      var name = path.basename(folder.path);
      var outputLicense = path.resolve(__dirname, '..', 'dist', name, 'LICENSE');
      var licenseFile = path.resolve(__dirname, '..', 'LICENSE');
      fs.writeFileSync(outputLicense, fs.readFileSync(licenseFile, 'utf8'));

      callback();
    }));
});

const GITHUB = 'https://github.com/pivotal-cf/pivotal-ui-react';
const NPM = 'https://www.npmjs.com/browse/keyword/pivotal%20ui%20modularized';
const README_HEADER = `Pivotal UI React ([GitHub](${GITHUB}), [npm](${NPM})) is a collection of [React](https://facebook.github.io/react/) components for rapidly building and prototyping UIs.`;

const README_FOOTER = (
`*****************************************

(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.
`);
function parseAnnotation(annotations, name, value) {
  // Parse `@property` annotations
  if (name === 'property') {
    annotations.properties = annotations.properties || [];
    // Group property annotation by types and descriptions
    let [propertyName, ...propertyTypes] = value.match(/\{.*?}\s*[^{]+|\S+/g);
    propertyTypes = propertyTypes
      // Extract `type` and `description` from strings that look like `{type} description`
      .map(typeString => typeString.match(/\{(.*?)}\s*([\s\S]+)/).slice(1, 3))
      // Convert to JSON
      .reduce(
        (types, [name, value]) => Object.assign(types, {[name]: value.trim()}),
        {}
      );
    annotations.properties.push({name: propertyName, types: propertyTypes});
  // Parse `@see` annotations
  } else if (name === 'see') {
    annotations.references = annotations.references || [];
    annotations.references.push(value);
  // Parse other annotations
  } else {
    annotations[name] = value.trim();
  }
  return annotations;
}
function parseCommentAst(commentNodes) {
  return commentNodes
    // Only process documentation blocks
    .filter(commentNode => commentNode.value.match(/^\*[\s\S]*@component/))
    // Extract @annotations
    .map(commentNode => commentNode.value.match(/@[^@]+/g))
    // Remove `*` characters and extra new lines
    .map(rawAnnotations => rawAnnotations.map(
      rawAnnotation => rawAnnotation.replace(/(?:\s*\n)?\s*\* ?/g, '\n').trim()
    ))
    // Extract `name` and `text` from a string that looks like '@name text'
    .map(annotationStrings => annotationStrings.map(
      annotationString => annotationString.match(/^@(\S+)\s+([\s\S]*)/).slice(1, 3)
    ))
    // Convert the result into JSON
    .map(annotationTuples => annotationTuples.reduce(
      (annotations, [name, value]) => parseAnnotation(annotations, name, value),
      {}
    ));
}
function annotationsToMarkdown(file, annotations) {
  var components = annotations.map(annotation => {
    var example = `${annotation.example}` || '';
    var properties = (annotation.properties || [])
      .map(property => {
        var propertyTypes = Object.keys(property.types)
          .map(type => `  - \`${type}\`: ${property.types[type]}`)
          .join('\n');
        return `- \`${property.name}\`\n${propertyTypes}\n`;
      })
      .join('\n');
    return [
      `### ${annotation.component}`,
      annotation.description,
      annotation.example,
      'properties' in annotation ?
        `#### Properties\n\n${properties}` :
        ''
    ].join('\n\n');
  }).join('\n\n');

  return ['## Components', components].join('\n\n');
}
gulp.task('assets-readme', function() {
  return gulp.src('components/**/*.js')
    .pipe(through.obj(function(file, encoding, callback) {
      var {ast: {comments}} = babel.transform(file.contents.toString(), {stage: 0});
      var annotations = parseCommentAst(comments);
      var packageJson = require(path.join(path.dirname(file.path), 'package.json'));
      var readme = [
        `# pui-react-${path.basename(file.path, '.js')}`,
        packageJson.description || '',
        README_HEADER,
        `See the [Pivotal UI Styleguide](${packageJson.homepage}) for fully rendered examples.`,
        annotationsToMarkdown(file, annotations),
        README_FOOTER
      ].join('\n\n');
      callback(null, Object.assign(file, {
        contents: new Buffer(readme),
        path: path.join(path.dirname(file.path), 'README.md')
      }));
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets-packaging', ['assets-package-json', 'assets-readme', 'assets-license']);

gulp.task('build', function() {
  runSequence('assets-javascript', 'assets-packaging');
});

gulp.task('assets', function() {
  runSequence('assets-javascript', 'assets-packaging', 'watch');
});
