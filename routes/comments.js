const express = require('express');
const router = express.Router();

router.get('/comments/:postid', (req, res) => {
    res.json({
        content: 'Parabéns. Gostei muito.',
        author: 'Desconhecido'
    });
});

module.exports = router;