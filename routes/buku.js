var express = require('express');
var router = express.Router();
var bukucontrollers = require('../controllers/bukucontrollers')


router.get('/', bukucontrollers.buku_list);
router.get('/:id', bukucontrollers.buku_list_detail);
router.post('/', bukucontrollers.buku_create);
router.put('/:id', bukucontrollers.buku_update);
router.delete('/:id', bukucontrollers.buku_delete);


module.exports = router;