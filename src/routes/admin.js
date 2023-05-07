const express = require('express');
const router = express.Router();


const { Auth } = require('../app/middleware/Authentication');
const AdminControllers = require('../app/controllers/AdminControllers');

//production routes
router.post('/create-product', Auth, AdminControllers.createProduct);

router.get('/stored-product/:category', Auth, AdminControllers.storedProducts);
router.get('/trash-product/:category', Auth, AdminControllers.trashProducts);
router.put('/:id/update-product', Auth,AdminControllers.updateProduct);
router.delete('/:id/delete-product', Auth, AdminControllers.deleteProduct);
router.patch('/:id/restore-product', Auth, AdminControllers.restoreProduct);
router.delete('/:id/forcedelete-product', Auth, AdminControllers.forcedeleteProduct);

router.get('/stored-customer', Auth, AdminControllers.storedCustomers);
//staff routes
// router.post('/create-staff', Auth, AdminControllers.createStaff);
router.get('/stored-staff', Auth, AdminControllers.storedStaffs);
router.get('/trash-staff', Auth, AdminControllers.trashStaffs);
router.put('/:id/update-staff', Auth, AdminControllers.updateStaff);
router.delete('/:id/delete-staff', Auth, AdminControllers.deleteStaff);
router.patch('/:id/restore-staff', Auth, AdminControllers.restoreStaff);
router.delete('/:id/forcedelete-staff', Auth, AdminControllers.forcedeleteStaff);

module.exports = router;