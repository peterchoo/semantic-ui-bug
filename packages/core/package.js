Package.describe({
  name: 'core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');


  api.use([
    'flemay:less-autoprefixer@1.1.0',
    'semantic:ui@2.0.8'
  ], 'client');


  api.addFiles([
    'semantic/custom.semantic.json',
    'semantic/semantic.less',
    'semantic/theme.config.import.less',
    'semantic/theme.import.less'
  ], 'client');
});
