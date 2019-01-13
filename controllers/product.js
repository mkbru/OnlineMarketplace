const Product = require('../models/product');

exports.product_create = (req,res,next) => {
  let product = new Product({
      title: req.body.title,
      price: req.body.price,
      inventory_count: req.body.inventory_count
  });

  product.save( (err,data) => {
     if(err) return next(err);

      res.status(200).json({
          status: true,
          message: 'Product created',
          data: data
      });
  });
};

exports.products_details = (req,res,next) => {
    Product.find({}, (err,products) => {
        if(err) return next(err);

        res.status(200).json({
            status: true,
            product: products,
        });
    });
};

exports.in_stock_only_products_details = (req,res) => {
    Product.find({inventory_count: { $gt:0 }}, (err,products,next) => {
        if(err) return next(err);

        res.status(200).json({
            status: true,
            product: products,
        });
    });
};

exports.product_details = (req,res,next) => {
    Product.findById(req.params.id, (err,product) => {
        if(err) next(err);

        res.status(200).json({
            status: true,
            data: product,
        });
    });
};

exports.product_update = (req,res,next) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,product) => {
        if(err) return next(err);

        res.status(200).json({
            status: true,
            message: 'Product Updated',
            data: product
        });
    });
};

exports.product_delete = (req,res,next) => {
  Product.findByIdAndRemove(req.params.id, (err,data) => {
      if(err) return next(err);

      res.status(200).json({
          status: true,
          message: 'Product deleted',
          data: data
      });
  });
};