const express = require('express');
const router = express.Router();

const{listarResponsaveis, buscarPorId, criarResponsavel, atualizarResponsavel, deletarResponsavel} = require("../controllers/responsavelController");

router.get('/',listarResponsaveis);
/*router.get('/:id',buscarPorId);
router.get('/',criarResponsavel);
router.get('/:id',atualizarResponsavel);
router.get('/:id',deletarResponsavel);*/

module.exports = router;
