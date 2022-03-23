# Installation
```
npm install
```

# Config
Default configuration : http.port = 1111 & https.port = 1112
You can change the default port in the config.js file.

Mongo db host name, port and database name are also part of config.js file


# Start the mongo daemon
```
mongod --dbpath /path/to/repo/db --directoryperdb --port 27018
```

# Starting App
```
npm start
```

# How to interact with MongoDB

1. Everytime you start the app a new record is added to mongo db Person collection

2. To retreive all the documents of the collection, goto http://localhost:1111/collection?name=Person
