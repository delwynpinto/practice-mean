# PracticeMeanAngular

This application was created with the intention of serving as a practice for working with the MEAN stack. The application manages posts from multiple users including creation, modifications & deletions once they have signed up.

Atlas has been used for the MongoDB database.<br>
Angular Material has been used as the UI framework.

[Application has been deployed](http://practice-mean-angular.s3-website-us-east-1.amazonaws.com/) using AWS Elastic Beanstalk for the server, S3 for the static hosting of the front end.

Application has also been created for integrated-deployment but isn't deployed yet.
Code in branch : [integrated-deployment](https://github.com/delwynpinto/practice-mean/tree/integrated-deployment)

The applications makes use of multiple features available with the technologies used in the stack as follows

## Node & Express

**Image Upload :** images are stored on the server, path stored in DB along with post data<br>
**Using JSON Webtoken for :** Authentication in signup, Authorization for editing & deleting posts<br>
**Custom Middleware :** for Authentication & Authentication<br>
**Multer :** used for working with images uploaded<br>
**Controllers :** for ease of development<br>
**Environment Variables :** for ease of deployment<br>

## Angular

**Template driven forms :** user sign up & login<br>
**Reactive Forms :** post create, edit & delete<br>
**Pagination :** displaying posts with adjustable number per page<br>
**Interceptors :** HTTP  requests & Error Handling<br>
**Lazy Loading :** to improve load time<br>
**Auth Guards :** navigation security<br>
**Feature Modules :** ease of development<br>
**Global Configurations :** for ease of deployment<br>

## MongoDB

Storage for User & Post details.<br>
CRUD operations using Mongoose.<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

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
