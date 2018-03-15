# Charcount API

## Requisites

### To run in local environment

First you need to install dependencies with

```sh
 $ npm install
```

Then choose method to run according to the environment you are running at.

#### Development

```sh
 $ npm run debug
```

#### Production

```sh
 $ npm start
```

### To run inside Docker

Make sure you have Docker installed.

#### Development

```sh
 $ docker-compose build
```
```sh
 $ docker-compose up
```

#### Production

```sh
 $ ./dockerBuild.sh
```
```sh
 $ ./dockerProdUp.sh APP_NAME PORT
```

### Testing

If you want to run test on localhost:4567, then you can run

```sh
 $ npm test
```