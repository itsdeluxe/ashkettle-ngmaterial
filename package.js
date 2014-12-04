Package.describe({
  name: 'ashkettle:ngmaterial',
  summary: ' A package to add Material Design to Angular ',
  version: '1.0.0',
  git: 'https://github.com/Ashkettle/ashkettle-ngmaterial.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  //JS Files
  api.addFiles('libs/angular-animate.js', 'client');
  api.addFiles('libs/angular-aria.js', 'client');
  api.addFiles('libs/angular-material.js','client');
  api.addFiles('libs/hammer.js','client');


  //CSS
  api.addFiles('libs/angular-material.css','client');

  //Modules
  api.addFiles('libs/modules/backdrop/backdrop-default-theme.css','client');
  api.addFiles('libs/modules/backdrop/backdrop.css','client');
  api.addFiles('libs/modules/backdrop/backdrop.js','client');
  api.addFiles('libs/modules/bottomSheet/bottomSheet-default-theme.css','client');
  api.addFiles('libs/modules/bottomSheet/bottomSheet.css','client');
  api.addFiles('libs/modules/bottomSheet/bottomSheet.js','client');
  api.addFiles('libs/modules/button/button-default-theme.css','client');
  api.addFiles('libs/modules/button/button.css','client');
  api.addFiles('libs/modules/button/button.js','client');
  api.addFiles('libs/modules/card/card-default-theme.css','client');
  api.addFiles('libs/modules/card/card.css','client');
  api.addFiles('libs/modules/card/card.js','client');
  api.addFiles('libs/modules/checkbox/checkbox-default-theme.css','client');
  api.addFiles('libs/modules/checkbox/checkbox.css','client');
  api.addFiles('libs/modules/checkbox/checkbox.js','client');
  api.addFiles('libs/modules/content/content-default-theme.css','client');
  api.addFiles('libs/modules/content/content.css','client');
  api.addFiles('libs/modules/content/content.js','client');
  api.addFiles('libs/modules/core/core.css','client');
  api.addFiles('libs/modules/core/core.js','client');
  api.addFiles('libs/modules/dialog/dialog-default-theme.css','client');
  api.addFiles('libs/modules/dialog/dialog.css','client');
  api.addFiles('libs/modules/dialog/dialog.js','client');
  api.addFiles('libs/modules/divider/divider-default-theme.css','client');
  api.addFiles('libs/modules/divider/divider.css','client');
  api.addFiles('libs/modules/divider/divider.js','client');
  api.addFiles('libs/modules/icon/icon.css','client');
  api.addFiles('libs/modules/icon/icon.js','client');
  api.addFiles('libs/modules/list/list.css','client');
  api.addFiles('libs/modules/list/list.js','client');
  api.addFiles('libs/modules/progressCircular/progressCircular-default-theme.css','client');
  api.addFiles('libs/modules/progressCircular/progressCircular.css','client');
  api.addFiles('libs/modules/progressCircular/progressCircular.js','client');
  api.addFiles('libs/modules/progressLinear/progressLinear-default-theme.css','client');
  api.addFiles('libs/modules/progressLinear/progressLinear.css','client');
  api.addFiles('libs/modules/progressLinear/progressLinear.js','client');
  api.addFiles('libs/modules/radioButton/radioButton-default-theme.css','client');
  api.addFiles('libs/modules/radioButton/radioButton.css','client');
  api.addFiles('libs/modules/radioButton/radioButton.js','client');
  api.addFiles('libs/modules/sidenav/sidenav.css','client');
  api.addFiles('libs/modules/sidenav/sidenav.js','client');
  api.addFiles('libs/modules/slider/slider-default-theme.css','client');
  api.addFiles('libs/modules/slider/slider.css','client');
  api.addFiles('libs/modules/slider/slider.js','client');
  api.addFiles('libs/modules/sticky/sticky.css','client');
  api.addFiles('libs/modules/sticky/sticky.js','client');
  api.addFiles('libs/modules/subheader/subheader-default-theme.css','client');
  api.addFiles('libs/modules/subheader/subheader.css','client');
  api.addFiles('libs/modules/subheader/subheader.js','client');
  api.addFiles('libs/modules/swipe/swipe.js','client');
  api.addFiles('libs/modules/switch/switch-default-theme.css','client');
  api.addFiles('libs/modules/switch/switch.css','client');
  api.addFiles('libs/modules/switch/switch.js','client');
  api.addFiles('libs/modules/tabs/tabs-default-theme.css','client');
  api.addFiles('libs/modules/tabs/tabs.css','client');
  api.addFiles('libs/modules/tabs/tabs.js','client');
  api.addFiles('libs/modules/textField/textField-default-theme.css','client');
  api.addFiles('libs/modules/textField/textField.css','client');
  api.addFiles('libs/modules/textField/textField.js','client');
  api.addFiles('libs/modules/toolbar/toolbar-default-theme.css','client');
  api.addFiles('libs/modules/toolbar/toolbar.css','client');
  api.addFiles('libs/modules/toolbar/toolbar.js','client');
  api.addFiles('libs/modules/toast/toast-default-theme.css','client');
  api.addFiles('libs/modules/toast/toast.css','client');
  api.addFiles('libs/modules/toast/toast.js','client');
  api.addFiles('libs/modules/tooltip/tooltip-default-theme.css','client');
  api.addFiles('libs/modules/tooltip/tooltip.css','client');
  api.addFiles('libs/modules/tooltip/tooltip.js','client');
  api.addFiles('libs/modules/whiteframe/whiteframe.css','client');
  api.addFiles('libs/modules/whiteframe/whiteframe.js','client');


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
