const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminControllers');

//production routes
router.post('/create-product', adminController.createProduct);
router.get('/stored-product', adminController.storedProducts);
router.get('/trash-product', adminController.trashProducts);
router.put('/:id/update-product', adminController.updateProduct);
router.delete('/:id/delete-product', adminController.deleteProduct);
router.patch('/:id/restore-product', adminController.restoreProduct);
router.delete('/:id/forcedelete-product', adminController.forcedeleteProduct);

router.get('/stored-customer', adminController.storedCustomers);
router.post('/register', adminController.registerAdmin)
router.post('/login', adminController.loginAdmin)
//staff routes
router.post('/create-staff', adminController.createStaff);
router.get('/stored-staff', adminController.storedStaffs);
router.get('/trash-staff', adminController.trashStaffs);
router.put('/:id/update-staff', adminController.updateStaff);
router.delete('/:id/delete-staff', adminController.deleteStaff);
router.patch('/:id/restore-staff', adminController.restoreStaff);
router.delete('/:id/forcedelete-staff', adminController.forcedeleteStaff);

module.exports = router;