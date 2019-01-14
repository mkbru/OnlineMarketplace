###Application Architecture & Design

![alt text](https://github.com/mkbru/OnlineMarketplace/blob/master/images/apiDesign.png)


This is a REST API written in Node.js using the Express framework and MongoDB for the database. 

All requests are being authenticated using JSON web tokens (<b>RFC 7519</b>) .

The application is leveraging a Docker container for easy deployment.

![alt text](https://github.com/mkbru/OnlineMarketplace/blob/master/images/dbSchema.png)

<br/>
To run the application on your local follow the instructions below.

    git clone https://github.com/mkbru/OnlineMarketplace.git
    
    cd /OnlineMarketplace
    
    mkdir config
    
    cd config
    
    touch config.js (paste the config file in here and save the file)
    
    cd ..

    docker build -t onlinemarketplace:v1 . 
    
    docker images       
    
    docker run -p 8080:8080 -d <IMAGE_ID>
   


###Usage

To use this API the you must create a new user, and generate a token. The token should be attached to the request 'Authorization' header for all requests. 

| Users API |Method| URL | Example Request |
|------------- | -------------   | ---| ---|
|[Create a new user]()        |`/Post `    | /users/signup|{"email":"testuser@gmail.com", "password":"abcd1234"}|
|[Generate a token]()             |`/Get  `    |/users/signin |{"email":"testuser@gmail.com", "password":"abcd1234"}|



| Products API |Method| URL | Example Request |
|------------- | -------------   | ---| ----| 
|[Create a new Product]()        |`/Post `    | /products/create|{"title":"Gloves","price":"20.00","inventory_count":"75"}|
|[Get all Products]()             |`/Get  `    |/products ||
|[Get available Products]()             |`/Get  `    |/products/available | |
|[Get a Product by Id]()           |`/Get `     |/products/:id ||
|[Update a Product by Id]()         |`/Put `  |/products/:id |{"title":"Mittens","price":"20.00","inventory_count":"50"}|
|[Delete a Product by Id]()         |`/Delete`   |/products/:id ||


| Carts API |Method| URL | Example Request |
|------------- | -------------   | ---| ---|
|[Create a new Cart]()        |`/Post `    | /carts/create||
|[Add a Product to a Cart]()             |`/Post  `    |/carts/addproduct |{"cart" : "$CART_ID","products" : [{"id" : "$PRODUCT_ID","quantity":"5"}]}|
|[Checkout a Cart]()             |`/Post  `    |/carts/checkout/:id ||
|[Cancel a Cart]()             |`/Post  `    |/carts/cancel/:id ||
|[Get all Carts]()             |`/Get  `    |/carts ||
|[Get a Cart by Id]()           |`/Get `     |/carts/:id ||
|[Update a Cart by Id]()         |`/Put `  |/carts/:id |{"cart" : "$CART_ID","products" : [{"id" : "$PRODUCT_ID","quantity":"10"}]}|
|[Delete a Cart by Id]()         |`/Delete`   |/carts/:id ||

###Integration Tests

This project provides integration tests for the routes and authorization. 

To run the tests:

    cd OnlineMarketplace
    npm test
