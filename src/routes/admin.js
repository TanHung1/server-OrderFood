const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminControllers');

router.post('/create-product', adminController.createProduct);
router.post('/create-staff', adminController.createStaff);
router.get('/stored-product', adminController.storedProducts);
router.get('/stored-staff', adminController.storedStaffs);
router.get('/trash-product', adminController.trashProducts);
router.get('/trash-staff', adminController.trashStaffs);
router.put('/:id/update-product', adminController.updateProduct);
router.put('/:id/update-staff', adminController.updateStaff);
router.delete('/:id/delete-product', adminController.deleteProduct);
router.delete('/:id/forcedelete-product', adminController.forcedeleteProduct);

// router.post('/handle-form-actions', adminController.handleFormActions);
// router.post('/handle-form-trash-actions', adminController.handleFormTrashActions)
// router.get('/:id/edit', adminController.edit);
// router.put('/:id', adminController.update);
// router.patch('/:id/restore', adminController.restore);
// router.delete('/:id', adminController.delete);
// router.delete('/:id/force', adminController.forcedelete);
// router.get('/trash-pizzas', adminController.trashPizza);

module.exports = router;