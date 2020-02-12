# User API http-server

Simple http-server with a user API

##  TODO

* Find all the TODO comments and enrich this app
* **Important!** Make your repository on GitHub or GitLab **PRIVATE**
* If you have question, ask me by email sergei@adaltas.com

## Functionality

* Uses default configuration with a path of the file storage
* Start http-server
* Create a user
* Get a user information

## Installation

```
git clone ...
npm install
```

## Usage

```
npm start
```

Go to `http://localhost:3000`

### Using Postman app

1. POST Create user:

```
http://localhost:3000/user/
```

Body parameters:
```
{
  username: 'toto',
  firstname: 'toto-firstname',
  lastname: 'toto-lastname'
}
```

2. GET user by username

```
http://localhost:3000/user/sergkudinov
```

## Developer

Run tests:
```
npm test
```

## Author

Sergei Kudinov   
sergei@adaltas.com
