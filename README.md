# generator-ng-gen

## An opinionated ES6 AngularJS Yeoman Generator with Gulp

Based on the excellent (and now unmaintained) [Gulp Angular Generator](https://github.com/Swiip/generator-gulp-angular), Ng-Gen generates AngularJS apps as well as essential angular building blocks like components and services.

## Usage

More information, options, parameters in the [usage documentation page](docs/usage.md)

### Install

##### Install required tools `yo`, `gulp` and `bower`:
```
npm install -g yo gulp bower
```

##### Install `generator-ng-gen`:
```
npm install -g generator-ng-gen
```


### Run

##### Create your base app
```
mkdir my-new-project && cd $_
yo ng-gen
```
##### Try out some subgenerators ([Subgenerator Usage](docs/usage.md))
```
yo ng-gen:controller my-controller
yo ng-gen:service my-service
yo ng-gen:component my-component
```
##### Serve your app
```
gulp serve
```


## Documentation

* [docs/README](docs/README.md)
* More informations about how to use your new project is available in the [docs/user-guide](docs/user-guide.md)
* If you want to know: [docs/how-it-works](docs/how-it-works.md).


## Features

![Logo](docs/assets/gulp.png)
![Logo](docs/assets/angular.png)
![Logo](docs/assets/bower.png)
![Logo](docs/assets/webpack.png)
![Logo](docs/assets/karma.png)
![Logo](docs/assets/istanbul.png)
![Logo](docs/assets/browsersync.png)
![Logo](docs/assets/jasmine.png)
![Logo](docs/assets/protractor.png)

![Logo](docs/assets/babel.png)
![Logo](docs/assets/sass.png)

[List features included](docs/usage.md#features-included-in-the-gulpfile)


## License

MIT
