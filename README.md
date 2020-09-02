# PracticeMeanAngular

This application was created with the intention of serving as a practice for working with the MEAN stack. The application manages posts from multiple users including creation, modifications & deletions once they have signed up.

The application has been deployed in 2 ways using AWS services viz.
[Seperated Deployment](http://practice-mean-angular.s3-website-us-east-1.amazonaws.com/) with Angular on S3 & NodeJS on EC2
URL : 

[Integrated deployment](http://practicemeanintegrated-env.eba-sdevwkhx.us-east-1.elasticbeanstalk.com/) with Angular and NodeJS on EC2
Code in branch : integrated-deployment

Atlas has been used for the MongoDB database.
Angular Material has been used as the UI framework.

The applications makes use of multiple features available with the technologies used in the stack as follows

## Node & Express

**Image Upload :** images are stored on the server, path stored in DB along with post data
**Using JSON Webtoken for :** Authentication in signup, Authorization for editing & deleting posts
**Custom Middleware :** for Authentication & Authentication
**Multer :** used for working with images uploaded
**Controllers :** for ease of development
**Environment Variables :** for ease of deployment

## Angular

**Template driven forms :** user sign up & login
**Reactive Forms :** post create, edit & delete
**Pagination :** displaying posts with adjustable number per page
**Interceptors :** HTTP  requests & Error Handling
**Lazy Loading :** to improve load time
**Auth Guards :** navigation security
**Feature Modules :** ease of development
**Global Configurations :** for ease of deployment

## MongoDB

Storage for User & Post details.
CRUD operations using Mongoose.

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
