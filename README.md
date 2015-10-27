# Introduction

This is an open source mobile app for learning Javascript regular expressions.
It has the following main features:

* A playground for trying all Javascript regex functions
* A cheatsheet for quickly reminding the common regex features
* A full guide that about regex function is copy/pasted from MDN

# Technology

This app is built using Javascript, Angular, Ionic on top of Codrova.

# Development setup

You need Node.js, JDK and Angular SDK.

Install Ionic, Cordova and other required tools:

```
$ npm install -g ionic gulp bower cordova karma-cli
```

Then build the web part of the project:

```
$ gulp build
```

This should populate the `www` directory.

Then `prepare` each platform by running:

```
$ cordova prepare
```

# Contribute

Contributions are welcome. Please don't break the coding conventions and make
sure that your code passes all tests.
