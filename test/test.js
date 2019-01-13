const db = require('../database/test-db');
const chai = require('chai');
const expect = chai.expect;
const server = require('../server');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();

const genToken = require('../controllers/user');



chai.use(chaiHttp);

describe("Integration tests", async () => {

    let product = '';
    let token = '';
    let cart = '';
    let cartProduct = '';



    describe("Authorization", () => {

        it("Should create a new user", done => {
            chai.request(server)
                .post('/users/signup')
                .send({'email':'testuse@gmail.com', 'password':'abcd1234'})
                .end((err,res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("Should generate a token", done => {
            chai.request(server)
                .post('/users/signin')
                .send({'email':'testuse@gmail.com', 'password':'abcd1234'})
                .end((err,res) => {
                    token = res.body.token;
                    res.should.have.status(200);
                    done();
                });
        });

    });


    describe("Product Routes", () => {

        it("Should create a new product", done => {
            chai.request(server)
                .post('/products')
                .set('Authorization', token)
                .send({'title':'beanie', 'price':19.99, 'inventory_count':45})
                .end((err,res) => {
                    product = res.body.data._id;
                    res.should.have.status(200);
                    res.body.status.should.equal(true);
                    done();
                });
            });

        it("Should get all products", done => {
            chai.request(server)
                .get('/products')
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.status.should.equal(true);
                    done();
                })
        });

        it("Should get products in stock", done => {
            chai.request(server)
                .get('/products/available')
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.status.should.equal(true);
                    done()
                });
            });

        it("Should get a product by Id", done => {
            chai.request(server)
                .get('/products/' + product)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.status.should.equal(true);
                    done();
                })
        });

        it("Should update a product by Id", done => {
            chai.request(server)
                .put('/products/'+product)
                .set('Authorization', token)
                .send({'title':'beanie', 'price':21.99, 'inventory_count':50})
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.status.should.equal(true);
                    done();
                });
        });

        it("Should delete a product by Id", done => {
            chai.request(server)
                .delete('/products/'+product)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.status.should.equal(true);
                    done()
                });
            });
    });

    describe("Cart routes", () => {

        it("Should create a new cart", done => {
            chai.request(server)
                .post('/carts')
                .set('Authorization', token)
                .end((err,res) => {
                    cart = res.body.data._id;
                    res.should.have.status(200);
                    done();
            });
        });

        it("Should create a new product", done => {
            chai.request(server)
                .post('/products')
                .set('Authorization', token)
                .send({'title':'beanie', 'price':19.99, 'inventory_count':45})
                .end((err,res) => {
                    cartProduct = res.body.data._id;
                    res.should.have.status(200);
                    res.body.status.should.equal(true);
                    done();
                });
        });

        it("Should add product to a cart", done => {
            chai.request(server)
                .post('/carts/addproduct')
                .set('Authorization', token)
                .send({'cart' : cart , products : [{id : cartProduct,quantity:'1'}]})
                .end((err,res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("Should checkout a cart", done => {
            done();
        });

        it("Should cancel a cart checkout", done => {
            done();
        });

        it("Should get all carts", done => {
            chai.request(server)
                .get('/carts')
                .end((err,res) => {
                    res.should.have.status(200);
                    done();
                })
        });

        it("Should get a cart by id", done => {
            chai.request(server)
                .get('/carts/'+cart)
                .end((err,res) => {
                    res.should.have.status(200);
                    done();
                })
        });

        it("Should update a cart by id", done => {
            chai.request(server)
                .put('/carts/'+cart)
                .set('Authorization', token)
                .send({'cart' : cart , products : [{id : cartProduct,quantity:'2'}]})
                .end((err,res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("Should delete a cart by id", done => {
            chai.request(server)
                .delete('/carts/'+cart)
                .end((err,res) => {
                    res.should.have.status(200);
                    done()
                });
        });

    });

});