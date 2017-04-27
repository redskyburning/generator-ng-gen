'use strict';
const Generator  = require('yeoman-generator');
const chalk      = require('chalk');
const yosay      = require('yosay');
const changeCase = require('change-case');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing ' + chalk.red('generator-ng-gen') + ' generator!'
    ));

    const prompts = [
      {
        type   : 'input',
        name   : 'name',
        message: 'Your project name',
        store  : true,
        default: this.appname // Default to current folder name
      },
      {
        type   : 'confirm',
        name   : 'someAnswer',
        message: 'Shall we begin?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const templates = [
      'bower.json'
    ];

    this.fs.copy(
      this.templatePath(`./**/!(${templates.join('|')})`),
      this.destinationPath('./')
    );

    this.fs.copyTpl(
      this.templatePath(`./**/+(${templates.join('|')})`),
      this.destinationPath('./'),
      {
        appName     : this.props.appName,
        appNameCamel:
      }
    );
  }

  install() {
    //this.installDependencies();
  }
};
