const UserGroups = require('../models/userGroupModel');
const EOPagination = require('../utils/paginationUtil');

exports.createUserGroups = async (req, res, next) => {
  const { name } = req.body;
  try {
    const userGroup = await UserGroups.create({
      name,
    });
    res.status(200).json({ success: true, data: userGroup });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllUserGroups = async (req, res, next) => {
  try {
    const resultPerPage = 5;
    const { page } = req.query;
    const userGroupsCount = await UserGroups.countDocuments();

    const paginationFeature = new EOPagination(
      UserGroups.find(),
      page
    ).pagination(resultPerPage);

    const userGroups = await paginationFeature.query;

    res.status(200).json({
      success: true,
      data: userGroups,
      pagination: {
        pageNumber: +page,
        totalCount: userGroupsCount,
        resultPerPage,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
