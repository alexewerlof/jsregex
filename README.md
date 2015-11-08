# Introduction

This is an open source mobile app for learning Javascript regular expressions.
It has the following main features:

* A playground for trying all Javascript regex functions
* A cheatsheet for quickly reminding the common regex features
* A full guide that about regex function is copy/pasted from MDN

# Technology

This app is built using Javascript, Angular, Angular Material on top of Codrova.

# Development setup

You need Node.js, JDK and Angular SDK.

Install Cordova and other development required tools:

```
$ npm install -g gulp bower cordova karma-cli
```

Then install the local dependencies:

```
$ npm install
```

This will first install npm packages and then the bower packages.
Then build the web part of the project:

```
$ gulp build
```

This should populate the `www` directory.

Then `prepare` each platform by running:

```
$ cordova build
```

Which runs `prepare` and `compile`.

You can then serve the `www` page locally on the given port (default 8000).

```
$ cordova serve [port]
```

See [Cordova's npm page](https://www.npmjs.com/package/cordova)
for more info.
If there are any issues with Cordova
[check this](https://www.npmjs.com/package/cordova#known-issues-and-troubleshooting).

# TODO

* Replace gulp with WebPacks
* Add regexp utility functions (for actually doing some string processing rather than learning).

# Contribute

Contributions are welcome. Please don't break the coding conventions and make
sure that your code passes all tests.
