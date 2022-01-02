const { createUser, getAllUsers } = require('../controllers/userController');

const router = require('express').Router();

router.route('/create').post(createUser);
router.route('/users').get(getAllUsers);

module.exports = router;
