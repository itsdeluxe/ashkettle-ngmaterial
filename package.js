Package.describe({
  name: 'ashkettle:ngmaterial',
  summary: ' A package to add Material Design to Angular ',
  version: '1.1.2',
  git: 'https://github.com/Ashkettle/ashkettle-ngmaterial.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  //JS Files
  api.addFiles('angular-material.min.css', 'client');
  api.addFiles('hammer.min.js', 'client');
  api.addFiles('angular-animate.min.js', 'client');
  api.addFiles('angular-aria.min.js', 'client');
  api.addFiles('angular-material.min.js', 'client');



  //THEMES
  api.addFiles('libs/themes/amber-theme.css','client');
  api.addFiles('libs/themes/blue-grey-theme.css','client');
  api.addFiles('libs/themes/blue-theme.css','client');
  api.addFiles('libs/themes/brown-theme.css','client');
  api.addFiles('libs/themes/cyan-theme.css','client');
  api.addFiles('libs/themes/deep-orange-theme.css','client');
  api.addFiles('libs/themes/deep-purple-theme.css','client');
  api.addFiles('libs/themes/green-theme.css','client');
  api.addFiles('libs/themes/grey-theme.css','client');
  api.addFiles('libs/themes/indigo-theme.css','client');
  api.addFiles('libs/themes/light-blue-dark-theme.css','client');
  api.addFiles('libs/themes/light-green-theme.css','client');
  api.addFiles('libs/themes/lime-theme.css','client');
  api.addFiles('libs/themes/orange-theme.css','client');
  api.addFiles('libs/themes/pink-theme.css','client');
  api.addFiles('libs/themes/purple-theme.css','client');
  api.addFiles('libs/themes/red-theme.css','client');
  api.addFiles('libs/themes/teal-theme.css','client');
  api.addFiles('libs/themes/yellow-theme.css','client');


});
