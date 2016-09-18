Vue.js Frontend Authentication
===

![](https://vuejs.org/images/logo.png)

A frontend codebase for authentication with Vue.js and JWT. Code built from the Auth0 tutorial [Build an App with Vue.js: From Authentication to Calling an API](https://auth0.com/blog/build-an-app-with-vuejs/)

## About the app

To log users in, we'll make an HTTP request to our authentication endpoint and save the JWT that is returned in localStorage.

**Vue components** allow us to specify a template, a script, and style rules all in one file.


## Setup

Launch server:

```
$ webpack-dev-server --inline --hot
```

Sample backend: https://github.com/auth0-blog/nodejs-jwt-authentication-sample. Clone the repo, install dependencies and then we can use it as an api endpoint to hit up `http://localhost:3001/api/random-quote`
