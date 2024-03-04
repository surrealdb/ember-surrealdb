# ember-surrealdb

[Short description of the addon.]

## Compatibility

- Ember.js v4.8 or above
- Ember CLI v4.8 or above
- Node.js v18 or above

## Installation

```
ember install ember-surrealdb
```

## Run the test app

Start your surrealdb server instance.

```
DEFINE table user schemaless permissions full;

DEFINE table person schemaless permissions full;

DEFINE SCOPE account SESSION 24h
    SIGNUP ( CREATE user SET email = $email, pass = crypto::argon2::generate($pass) )
    SIGNIN ( SELECT * FROM user WHERE email = $email AND crypto::argon2::compare(pass, $pass) )
;
```

Start run the development server by using the following command in the project root `ember serve`.

Visit http://localhost:4200

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
