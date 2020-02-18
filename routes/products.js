const express = require('express');
const router = express.Router();

// 제품 불러오기 API 큰틀을 만든거다. 
router.get('/', (req, res) => {
    res.json({
        message: 'Products were fetched'
    });
});


// 제품 등록하는 API 
router.post('/', (req, res) => {
    res.json({
        message: "Products are added"
    });
});


// 업데이트 하는 API
router.patch('/', (req, res) => {
    res.json({
        message: "Products are fetched"
    });
});

// 삭제하는 API

router.delete('/', (req, res) => {
    res.json({
        message: "Products are deleted"
    });
});

















module.exports = router; //그래야 딴데서 읽혀져요//