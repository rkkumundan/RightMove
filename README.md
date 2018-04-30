# Right Move For Sale and To Rent property testing

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

## Prerequisites

- Java `1.8.x`
- maven `3.x` or `3.5.x` or _latest and greatest_ (you would need a `settings.xml` file if you do not have already)
- An editor like `Eclipse IDE` would be useful!
- A valid developer certificate to enable you to get dependencies from artifactory


### Installing

A step by step series of examples that tell you how to get tests running locally.
```
git clone https://github.com/rkkumundan/RightMove.git
```

Confirm you can retrieve all dependencies by running
```
mvn dependency:resolve
```
#### Running tests locally in Chrome browser

- mvn verify -P double

- mvn verify -P forsale

- mvn verify -P torent
