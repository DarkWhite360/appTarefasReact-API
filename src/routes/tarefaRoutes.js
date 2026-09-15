const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get("/",tarefaController.listarTarefas);
/*router.get("/:id",tarefaController.buscarPorId);
router.get("/",tarefaController.criarTarefa);
router.get("/:id",tarefaController.atualizarTarefa);
router.get("/:id",tarefaController.deletarTarefa);*/

module.exports = router;