const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get("/",tarefaController.listarTarefas);
router.post("/",tarefaController.cadastrarTarefa);
/*router.get("/:id",tarefaController.buscarPorId);
router.get("/:id",tarefaController.atualizarTarefa);
router.get("/:id",tarefaController.deletarTarefa);*/

module.exports = router;