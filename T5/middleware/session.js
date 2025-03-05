const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/jwt");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError({ message: "No token provided", status: 401 });
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken._id) {
      handleHttpError({ message: "Invalid token", status: 401 });
      return;
    }
    next();
  } catch {
    handleHttpError({ message: "NOT_SESSION", status: 401 });
  }
};

module.exports = { authMiddleware };
