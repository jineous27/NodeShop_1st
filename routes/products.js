const express = require('express');
const router = express.Router();
const productModel = require('../models/product');

// 제품 불러오기 API 큰틀을 만든거다. Product model에서 찾고, 실행하고, 뿌려주고 에러를 잡는다. 
router.get('/', (req, res) => {
    productModel
        .find()
        .exec()
        .then(docs => {
            res.json({
                message: "Successful Total Get Data",
                products: docs
            });
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });



    // res.json({
    //     message: 'Products were fetched'
    // });
});

//선택된 제품을 불러오는 API를 만들어 보자 (큰틀) ProductModel 에 담겨 있으니 ByID기준으로 찾고, 실행, 뿌리고 에러 잡기. 
router.get('/:productID', (req, res) => {
    const productID = req.params.productID;
    productModel
        .findById(productID)
        .exec()
        .then(doc => {
            console.log(doc); 
            //ID가 있을 때 이렇게 뿌려주겠다라고 코딩 (정의햇음) + ID 없을때 정의
            if (doc) {
                res.json ({
                    msg: "Successful get product detail",
                    productInfo: doc
                })
            } else {
                res.json({
                    msg: "No valid entry found for provided ID"
                });
            }
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });
});










// 제품 등록하는 API 
router.post('/', (req, res) => {
    const product = new productModel({
        name: req.body.name,
        price: req.body.price
    });
    //새로운 product 을 저장하고, 어떻게 뿌려줄지 저장을 하고 저장이 안되었을 때 오류 케치해서 뿌려지기
    product
        .save()
        .then(result => {
            res.json({
                message: 'Your product is succesfully registered',
                productInfo: result
            });
        })
        .catch(error => {
            res.json({
                err: error
            });
        });

    // res.json({
    //     message: "Products are added", 
    //     createdProduct: product //product를 뿌려주겠다. 위에 Key/value 값이 뿌려짐.//
    // });
});


// 업데이트 하는 API
router.patch('/', (req, res) => {
    res.json({
        message: "Products are fetched"
    });
});


// 잔체를 삭제하는 API (지울때만 쓴다.) Then 에는 따로 데이터가 없으니,, 잘 삭제되었다고 메세지만 뿌리면 됨.

router.delete('/', (req, res) => {
    productModel
        .deleteMany()
        .then(()=> {
            res.json({
                msg: "Deleted All"
            })
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });
});

// 선택된 제품을 삭제하는 API (도 따로 만들어준다) ProductID를 상수화

router.delete('/:productID', (req, res) => {
    const productID = req.params.productID;
    productModel
        .findByIdAndDelete(productID)
        .then(() => {
            res.json({
                msg: "Delete the product"
            })
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });
});














module.exports = router; //그래야 딴데서 읽혀져요//