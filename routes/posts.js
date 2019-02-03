const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.json({
        title: "Meu primeiro post",
        content: 'Era uma vez uma publicação',
        author: 'Gilmar de Alcantara '
    });
});
module.exports = router;