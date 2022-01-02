const {
  createUserGroups,
  getAllUserGroups,
} = require('../controllers/userGroupController');

const router = require('express').Router();

router.route('/createGroups').post(createUserGroups);
router.route('/list').get(getAllUserGroups);

module.exports = router;
