# Ember QueryBuilder

An EmberJS wrapper for [jQuery QueryBuilder](https://github.com/mistic100/jQuery-QueryBuilder)

[![Build Status](https://travis-ci.org/offirgolan/ember-query-builder.svg)](https://travis-ci.org/offirgolan/ember-query-builder)
[![npm version](https://badge.fury.io/js/ember-query-builder.svg)](http://badge.fury.io/js/ember-query-builder)
[![Dependency Status](https://david-dm.org/offirgolan/ember-query-builder.svg)](https://david-dm.org/offirgolan/ember-query-builder)

## Features

- Supports all possible options
- Exposes QueryBuilder instance to allow direct interaction

## Installation

```
ember install ember-query-builder
```

## Helpful Links

- ### [Changelog](CHANGELOG.md)

## Looking for help?
If it is a bug [please open an issue on GitHub](http://github.com/offirgolan/ember-query-builder/issues).

## Usage

### Options

The `query-builder` component accepts all possible [jQuery QueryBuilder options](http://querybuilder.js.org/index.html#options).

```hbs
{{query-builder rules=rules filters=filters plugins=plugins conditions=conditions default_condition='OR'}}
```

### Accessing the QueryBuilder Instance

The `query-builder` component exposes an `onChange` action which will pass the current QueryBuilder instance. This action will get called
every time the component needs to re-instantiate due to changes in the passed attributes.

```hbs
{{query-builder filters=filters onChange=(action (mut queryBuilder))}}
```

```js
if(queryBuilder.validate()) {
  this.set('rules', queryBuilder.getRules());
}
```

## Styling

This addon provides some styling options which can be added to your `ember-cli-build` file.

### Dark Theme

```js
var app = new EmberApp(defaults, {
  'ember-query-builder': {
    darkTheme: true
  }
});
```

### Opt Out

```js
var app = new EmberApp(defaults, {
  'ember-query-builder': {
    includeCss: false
  }
});
```
