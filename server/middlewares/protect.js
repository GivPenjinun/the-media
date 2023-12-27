import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  //const token = req.cookies.authToken;
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const tokenWithoutBearer = token.split(" ")[1];

  jwt.verify(tokenWithoutBearer, "jwtkey", (err, payload) => {
    if (err) {
      return res.status(401).json({
        message: "Token is invalid",
      });
    }
    //insert data from token in req.user
    req.user = payload;
    next();
  });
};
