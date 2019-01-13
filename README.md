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
|[Create a new user]()        |`/Post `    | /users/signup|{"email":"testuser@gmail.com", "password":"abcd1234"}|
|[Generate a token]()             |`/Get  `    |/users/signin |{"email":"testuser@gmail.com", "password":"abcd1234"}|



| Products API |Method| URL | Curl Example |
|------------- | -------------   | ---| ----| 
|[Create a new Product]()        |`/Post `    | /products/create|{"title":"Gloves","price":"20.00","inventory_count":"75"}|
|[Get all Products]()             |`/Get  `    |/products ||
|[Get available Products]()             |`/Get  `    |/products/available | |
|[Get a Product by Id]()           |`/Get `     |/products/:id ||
|[Update a Product by Id]()         |`/Update `  |/products/:id |{"title":"Mittens","price":"20.00","inventory_count":"50"}|
|[Delete a Product by Id]()         |`/Delete`   |/products/:id ||


| Carts API |Method| URL | Curl Example |
|------------- | -------------   | ---| ---|
|[Create a new Cart]()        |`/Post `    | /carts/create||
|[Add a Product to a Cart]()             |`/Post  `    |/carts/addproduct |{"cart" : "$CART_ID","products" : [{"id" : "$PRODUCT_ID","quantity":"5"}]}|
|[Checkout a Cart]()             |`/Post  `    |/carts/checkout/:id ||
|[Cancel a Cart]()             |`/Post  `    |/carts/cancel/:id ||
|[Get all Carts]()             |`/Get  `    |/carts ||
|[Get a Cart by Id]()           |`/Get `     |/carts/:id ||
|[Update a Cart by Id]()         |`/Update `  |/carts/:id |{"cart" : "$CART_ID","products" : [{"id" : "$PRODUCT_ID","quantity":"10"}]}|
|[Delete a Cart by Id]()         |`/Delete`   |/carts/:id ||