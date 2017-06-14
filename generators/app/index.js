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
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.appName = props.name || 'app name';
    });
  }

  writing() {
    const templates = [
      'bower.json',
      'karma.conf.js',
      'package.json',
      'index.config.js',
      'index.module.js',
      'index.html',
      'home.controller.spec.js',
      'main.controller.spec.js',
      'build.js'
    ];

    this.fs.copy(
      this.templatePath(`./**/!(${templates.join('|')})`),
      this.destinationPath('./')
    );

    this.fs.copy(
      this.templatePath(`./**/.*!(${templates.join('|')})`),
      this.destinationPath('./')
    );

    let context = {
      appName      : this.appName,
      appNameDashed: changeCase.paramCase(this.appName),
      appNameCamel : changeCase.camelCase(this.appName)
    };

    this.fs.copyTpl(
      this.templatePath(`./**/+(${templates.join('|')})`),
      this.destinationPath('./'),
      context
    );

    this.config.set('appName',this.appName);
    this.config.save();
  }

  install() {
    this.installDependencies();
    // TODO : This is really handy, but should be made optional
    this.spawnCommandSync('git', ['init']);
    this.spawnCommandSync('git', ['add', '--all']);
    this.spawnCommandSync('git', ['commit', '-m', 'generator output', '--quiet']);
  }
};
