const config = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "settings" : {
    "import/resolver": {
      "webpack": {
        "config": "webpack.json",
      },
    },
  },
  "globals": {}, // added programatically later
  "rules": {
    "import/no-unresolved": [2, { ignore: ['\~*'] }],
    "no-unused-expressions": 0, // allows to do x && x();
    "no-underscore-dangle": 0, // allows x._bla
    "one-var": 0, // allow const x = 1, y = 2;
    "consistent-return": 0, // allow () => { if (x) { return; } ... }
    "no-empty": 0, // allow {} // used for error catching like try {...} catch (e) {}
    "react/wrap-multilines": 0, // allow normal html syntax
    "jsx-a11y/img-has-alt": 0, // allow no alt attribute on images

    "no-param-reassign": 1, // allow to change input parameters
    "prefer-template": 1, // allow string concatenation
  },
  "parserOptions":{
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
};

for (var globalName of [
  'Meteor',
  'WebApp',
  'Accounts',
  'WebAppInternals',
  'Template',
  'Blaze',
  'Tracker',
  'Session',
  '$',
]) {
  config.globals[globalName] = true;
}

module.exports = config;
