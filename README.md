# keycloak-poc

## Start Running

### Run Keycloak w/ Postgres Backend
```bash
docker compose up
```

### Setup Keycloak
 ** **first time only** **

- Login to portal @ http://localhost:8080

__Credentials__
```
User: admin
Password: Pa55w0rd
```

- Navigate `Master Realm -> Import`
- Import realm-export.json (skip on existing)
- Create user `Master Realm -> Users -> Create Users`
- Enter any username and password (disable temp password)

### Run Services
- gateway
- callme

### Run Front End
`cd` to `./front-end`
```bash
npm start
```

### Login to frontend @ http://localhost:8080
