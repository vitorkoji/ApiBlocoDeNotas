const express = require('express');
const router = express.Router();
const controller = require('../controllers/blocoNotasController')

//Show all
router.get('/', controller.getAll);

//Search noticia
router.get('/:id?', controller.get);

//Delete noticia
router.delete('/:id', controller.delete);

//Adicionar uma noticia
router.post('/', controller.post);

//Atualizar noticia
router.patch('/:id', controller.patch);

module.exports = router;