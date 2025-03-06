const { handleHttpError } = require("../utils/handleError");

const checkRole = (roles) => (req, res, next) => {
  try {
    const user = req.user;
    const userRole = user.role;
    const checkValueRol = roles.includes(userRole);
    if (!checkValueRol) {
      handleHttpError(403, "NOT_ALLOWED", res);
      return;
    }
    next();
  } catch (error) {
    handleHttpError(403, "NOT_ALLOWED", res);
  }
};

MediaSourceHandle.exports = checkRole;
