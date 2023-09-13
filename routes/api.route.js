const router = require('express').Router();
const personController = require('../controllers/personController');

router.get('/home', async (req, res, next) => {
    res.send({ message: 'Ok api is working 🚀' });
});
router.get('/',personController.getAll)
router.post('/create', personController.createPerson);
router.get('/:id', personController.getPersonById);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;