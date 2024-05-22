# AngularWBootstrap

👋 Hi, I’m **syrenly** and welcome to **angular-w-bootstrap** repo!

This is sample app that uses Bootstrap 5 framework, NgClass and NgStyle directives, class dynamic attributes, suffix operators, inline styles.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2 and it is currently at version 17.3.1

⚗️ Unit test implemented.

The current implementation uses Bootstrap 5 through npm package. If you want to use the cdn link instead, then uninstall the package running the command `npm uninstall bootstrap`; then, go to [index.html](./src/index.html) and uncomment the following code:

```
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous"
/>
```

If you need a different version of Bootstrap, remember to recreate the hash of the integrity attribute (or remove entirely the that attribute, in couple with crossorigin. It is not suggested 👮; every external link/source should be always safe and validated).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `npm build:prod` to build in production the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Last code coverage

Run `npm run test:coverage` to get stats about the code coverage. Current:

```
=============================== Coverage summary ===============================
Statements   : 100% ( 49/49 )
Branches     : 100% ( 12/12 )
Functions    : 100% ( 6/6 )
Lines        : 100% ( 48/48 )
================================================================================
```

## Lint

Run `ng lint` to run the Angular lint.

Run `npm run eslint` to run the ES lint.

Run `npm run eslint:fix` to run the ES lint and apply fixes.

## Docker

Install docker in your machine. From the root folder of this application, run

`docker build -t angular-w-bootstrap:latest .`

It will need a couple of minutes to set up the container the first time. The following runs will be faster.

Run `docker-compose up`

## Branches

-   [main](https://github.com/syrenly/angular-w-bootstrap/tree/main) Implementation with Angular (latest version).
