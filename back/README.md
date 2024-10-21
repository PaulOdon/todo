## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## config

Change inside `schema.prisma`

```bash
$ datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")}
```

Create `.env` file at / and add env var `DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"`

## run migration and generate prisma client utilies

```bash
# run mirgation
$ npx prisma migrate dev

# generate prisma client class
$ npx prisma generate
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
