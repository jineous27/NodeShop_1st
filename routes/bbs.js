const express = require('express');
const router = express.Router();

//게시판에 글 등록하기 API
router.get('/', (req, res) => {
    res.json({
        message: 'The contents were added'
    });
});

//게시판에 글 불러오기 API
router.post('/', (req, res) => {
    res.json({
        message: 'The contents were fetched'
    });
});


//게시판에 글 수정/업데이트 API
router.patch('/', (req, res) => {
    res.json({
        message: "The contents were patched"
    });
});

//게시판에 글 삭제 API
router.delete('/', (req, res) => {
    res.json({
        message: "The contents were deleted"
    });
});







module.exports = router;