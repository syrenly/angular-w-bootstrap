# AngularWBootstrap

👋 Hi, I’m @syrenly and welcome to angular-w-bootstrap repo!

This is sample app that uses Bootstrap framework, NgClass and NgStyle directives, class dynamic attributes, suffix operators, inline styles.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2 and it is currently at version 17.3.1.

⚗️ Unit test implemented.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Last code coverage

Run `ng test --no-watch --code-coverage` to get stats about the code coverage. Current:

```
=============================== Coverage summary ===============================
Statements   : 100% ( 49/49 )
Branches     : 100% ( 12/12 )
Functions    : 100% ( 6/6 )
Lines        : 100% ( 48/48 )
================================================================================
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker

Install docker in your machine. From the root folder of this application, run

`docker compose up`

It will need a couple of minutes to set up the container the first time. The following runs will be faster.
The current Dockerfile is configured for live reloading. If you want to provide a production version of the application, change the Dockerfile from:

```
FROM node:20.9.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm run start
```

```
FROM node:20.9.0-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/project-name/ /usr/share/nginx/html
EXPOSE 80
```

Remember to execute docker-compose build when you change the files docker-compose.yml or Dockerfile
