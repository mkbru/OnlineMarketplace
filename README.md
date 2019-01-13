Application Architecture & Design

Node.js/Express, MongoDB, JWT

Run Locally

    git clone
    
    cd /

    docker build -t ecommerce:v1 .
    
    docker ps       
    
    docker run -d -p 3000:3000 <CONTAINER ID> 


Usage

To generate a Token create a new user and generate a token, response containing a JWT token will be sent back. Attach it to the header of all requests used to communicate with this API. 

| Users API |Method| URL | Curl Example |
|------------- | -------------   | ---| ---|
|[Create a new user]()        |`/Post `    | /users/signup|curl -d '{"email":"user@gmail.com", "password":"abcd1234"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users/signup |
|[Generate a token]()             |`/Get  `    |/users/signin |curl -d '{"email":"user@gmail.com", "password":"abcd1234"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users/signin |



| Products API |Method| URL | Curl Example |
|------------- | -------------   | ---| ----| 
|[Create a new Product]()        |`/Post `    | /products/create|curl -d '{"title":"Canada Beanie", "price":"19.99", "inventory_count" : "250"}' -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X POST http://localhost:3000/products/create
|
|[Fetch available Products]()             |`/Get  `    |/products/available |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X GET http://localhost:3000/products/available/
|
|[Fetch all Products]()             |`/Get  `    |/products |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X GET http://localhost:3000/products/|
|[Fetch a Product by Id]()           |`/Get `     |/products/:id |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X GET http://localhost:3000/products/5c33ecd1b2c4da79401cc34d
|
|[Update a Product by Id]()         |`/Update `  |/products/:id ||
|[Delete a Product by Id]()         |`/Delete`   |/products/:id |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X DELETE http://localhost:3000/products/5c33ecd1b2c4da79401cc34d|


| Carts API |Method| URL | Curl Example |
|------------- | -------------   | ---| ---|
|[Create a new Cart]()        |`/Post `    | /carts/create|curl -d '{"products":[{"item" : "5c33ecd1b2c4da79401cc34d" , "quantity" : 1},{"item" : "5c33f2f8649583822bb1d45e" , "quantity" : 2}]}' -H "Content-Type: application/json" -H "Authorization: `<Token>`" -X POST http://localhost:3000/carts/create|
|[Checkout an existing Cart]()             |`/Post  `    |/carts/checkout/:id |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X POST http://localhost:3000/carts/checkout/5c355b931212df238effb313|
|[Fetch all Carts]()             |`/Get  `    |/carts |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X GET http://localhost:3000/carts|
|[Fetch a Cart by Id]()           |`/Get `     |/carts/:id |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X GET http://localhost:3000/carts/5c34e2be16e4908cf8f7202d|
|[Update a Cart by Id]()         |`/Update `  |/carts/:id |curl -d '{"products":[{"item" : "5c356f91629b8b55bf23b13e" , "quantity" : 15},{"item" : "5c356fb6629b8b55bf23b140" , "quantity" : 25}]}' -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X PUT http://localhost:3000/carts/5c357023629b8b55bf23b145|
|[Delete a Cart by Id]()         |`/Delete`   |/carts/:id |curl -H "Content-Type: application/json" -H "Authorization: $AUTH_TOKEN" -X DELETE http://localhost:3000/products/5c33ecd1b2c4da79401cc34d|