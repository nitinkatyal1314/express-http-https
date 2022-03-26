# Pre-Requisite
Node Version >=14 

# Installation
```
npm install
```

# Mongo Connection
We are using mongo cluster on cloud. This will be always available for use for everyone so you dont need to install mongo db locally. The cluster url is mentioned in the .env file.

# Configuration
The configuration is available in the .env file. By default, server runs on port 4000.

# DB initialization
Mongo db can be initialisez using scripts available. 

Note : This scripts might have already been used to populate the db so don' run it again and again to create duplicate data:

```
// Initialize farmers data
npm run populate-farmers

// Initialize buyers data
npm run populate-buyers

```

# Starting App
```
npm run server
```

# Routes

1. Farmer routers

All the farmer router are (tested via postman)
```
GET (Retreives all farmers)
GET http://localhost:PORT/api/farmer

POST (Login Farmer)
POST http://localhost:PORT/api/farmer/register { email: 'emailID', 'password': 'password'}
```
POST (Create Farmer)
POST http://localhost:PORT/api/farmer/register { name: 'Your Name' email: 'emailID', 'password': 'password'}
```
2. Buyer routers
All the buyer router are (tested via postman)
```
POST (Login Buyer)
POST http://localhost:PORT/api/buyer { email: 'emailID', 'password': 'password'}
```
POST (Create Buyer)
POST http://localhost:PORT/api/buyer { name: 'Your Name' email: 'emailID', 'password': 'password'}
```
