const express = require('express');
const router = express.Router();

const { AuthenticationAdmin } = require('../app/middleware/Authentication');
const AdminControllers = require('../app/controllers/AdminControllers');

//production routes
router.post('/create-product', AuthenticationAdmin, AdminControllers.createProduct);
router.get('/stored-product/:category', AuthenticationAdmin, AdminControllers.storedProducts);
router.get('/trash-product/:category', AuthenticationAdmin, AdminControllers.trashProducts);
router.put('/:id/update-product', AuthenticationAdmin,AdminControllers.updateProduct);
router.delete('/:id/delete-product', AuthenticationAdmin, AdminControllers.deleteProduct);
router.patch('/:id/restore-product', AuthenticationAdmin, AdminControllers.restoreProduct);
router.delete('/:id/forcedelete-product', AuthenticationAdmin, AdminControllers.forcedeleteProduct);

router.get('/stored-customer', AuthenticationAdmin, AdminControllers.storedCustomers);
//staff routes
// router.post('/create-staff', AuththenticationAdmin, AdminControllers.createStaff);
router.get('/stored-staff', AuthenticationAdmin, AdminControllers.storedStaffs);
router.get('/trash-staff', AuthenticationAdmin, AdminControllers.trashStaffs);
router.put('/:id/update-staff', AuthenticationAdmin, AdminControllers.updateStaff);
router.delete('/:id/delete-staff', AuthenticationAdmin, AdminControllers.deleteStaff);
router.patch('/:id/restore-staff', AuthenticationAdmin, AdminControllers.restoreStaff);
router.delete('/:id/forcedelete-staff', AuthenticationAdmin, AdminControllers.forcedeleteStaff);

module.exports = router;