const User = require('../models/userModel');
const EOPagination = require('../utils/paginationUtil');

exports.createUser = async (req, res, next) => {
  const { firstName, lastName } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
    });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const resultPerPage = 5;
    const { page } = req.query;
    console.log(req.query);
    const usersCount = await User.countDocuments();

    const paginationFeature = new EOPagination(User.find(), page).pagination(
      resultPerPage
    );

    // paginationFeature.pagination(resultPerPage);
    const users = await paginationFeature.query;

    res.status(200).json({
      success: true,
      data: users,
      pagination: {
        pageNumber: +page,
        totalCount: usersCount,
        resultPerPage,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
