# Fake back-end
Get a full fake REST API with zero coding
https://www.npmjs.com/package/json-server
  
## Install JSON Server
npm install -g json-server
json-server --watch db.json

# Update version
npm-check-updates upgrades your package.json dependencies to the latest versions, ignoring specified versions.
https://www.npmjs.com/package/npm-check-updates

## Install npm-check-updates
npm install -g npm-check-updates

## Usage
Check Updates:
ncu

Upgrade package.json
ncu -u

Install packages
npm i

# Ivy Compilation
Ivy is the code name for Angular's next-generation compilation and rendering pipeline. Starting with Angular version 8, you can choose to opt in to start using a preview version of Ivy and help in its continuing development and tuning.

## Using Ivy in a new project
To start a new project with Ivy enabled, use the --enable-ivy flag with the ng new command:

ng new shiny-ivy-app --enable-ivy

# Using Ivy in an existing project
tsconfig.app.json.
{
  "compilerOptions": { ... },
  "angularCompilerOptions": {
    "enableIvy": true
  }
}

angular.json
{
  "projects": {
    "my-existing-project": {
      "architect": {
        "build": {
          "options": {
            ...
            "aot": true,
          }
        }
      }
    }
  }
}

# VSCode extensions
<ol>
  <li>Angular Console</li>
  <li>Angular Snippets</li>
  <li>Better Comments</li>
  <li>Debugger for Chrome</li>
  <li>GitLens</li>
  <li>NPM</li>
  <li>NPM Intellisense</li>
  <li>VSCode-Icons</li>
  <li>AngularEssentials</li>
  <li>Angular Augury</li>
<ol>

# MinhaAppAngular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
