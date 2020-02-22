const express = require('express');
const router = express.Router();


// 장바구니에 제품 담는 API
router.post('/', (req, res) => {
    const cart = {
        name: req.body.name,
        qty: req.body.qty,
        option: req.body.option,
    }

    res.json({
        message: "Products were added to the cart",
        createdCart: cart
    });
});

// 장바구니에 제품 보여주기 API
router.get('/', (req, res) => {
    res.json({
        message: "Products were listed"
    });
});

// 장바구니에 제품 추가 및 업데이트 API
router.patch('/', (req, res) => {
    res.json({
        message: "Products were pathed"
    });
});

// 장바구니에 제품 삭제 API
router.delete('/', (req, res)=> {
    res.json({
        message: "Products were deleted"
    });
});















module.exports = router;