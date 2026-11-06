const express = require('express');
const router = express.Router();

const{listarResponsaveis, buscarPorId, criarResponsavel, atualizarResponsavel, deletarResponsavel, login} = require("../controllers/responsavelController.js");

router.get('/',listarResponsaveis);
//router.get('/:id',buscarPorId);
router.post('/',criarResponsavel);
/*router.get('/:id',atualizarResponsavel);
router.get('/:id',deletarResponsavel);*/
router.post("/autenticar", login);

module.exports = router;
